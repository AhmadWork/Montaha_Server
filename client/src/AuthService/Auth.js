import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import { loadAllOrders } from '../actions/orders-action';
import { loadUserCart, clearTheCart } from '../actions/cart-action';
import { changeLoginStatus } from '../actions/all-statuses-action';
import { storeUserProfile } from '../actions/userprofile-action';
import { showTheAlert } from '../actions/alert-action';

/* eslint-disable  no-alert */
export default class Auth {
  static userProfile;
  static auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: AUTH_CONFIG.audience,
    responseType: 'token id_token',
    scope: 'openid profile read:products update:products create:products'
  });
  static getProfile(cb) {
    let accessToken = Auth.getAccessToken();
    Auth.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        Auth.userProfile = profile;
      }
      cb(err, profile);
    });
  }
  static checkAndInitializeLoginStatus(dispatch) {
    if (Auth.isAuthenticated()) {
      dispatch(changeLoginStatus(true));
      Auth.getProfile((err, profile) => {
        if (err) {
          console.log(err);
        } else {
          dispatch(storeUserProfile(profile));
          dispatch(loadUserCart());
          dispatch(loadAllOrders());
        }
      });
    }
  }
  static login() {
    Auth.auth0.authorize();
  }

  static handleAuthentication(props) {
    const { history, dispatch } = props;
    Auth.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        Auth.setSession(authResult, props);
        Auth.getProfile((err, profile) => {
          if (err) {
            console.log(err);
          } else {
            dispatch(storeUserProfile(profile));
            dispatch(loadUserCart());
            dispatch(loadAllOrders());
            console.log(Auth.userProfile);
          }
        });
      } else if (err) {
        history.push('/');
        console.log(err);
        dispatch(showTheAlert('Sorry! unsuccessful login attempt.', 'danger'));
      }
    });
  }

  static setSession(authResult, props) {
    const { history, dispatch } = props;
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    dispatch(showTheAlert('You"re successfully logged in.', 'success'));
    dispatch(changeLoginStatus(true));
    // navigate to the home route
    history.replace('/products');
  }
  static getAccessToken() {
    return localStorage.getItem('access_token');
  }
  static getIdToken() {
    return localStorage.getItem('id_token');
  }
  static logout(dispatch) {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    dispatch(changeLoginStatus(false));
    dispatch(clearTheCart());

    // navigate to the home route
    history.replace('/');
  }
  /**
   * @param void
   * @return boolean
   */
  static isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
