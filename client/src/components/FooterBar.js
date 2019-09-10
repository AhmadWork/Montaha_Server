import React from 'react';
import { connect } from 'react-redux';
import Auth from '../AuthService/Auth';
import { NavLink, withRouter } from 'react-router-dom';

import upworkIcon from '../assets/upwork.svg';
import upworkIconHover from '../assets/upwork-hover.svg';

import '../styles/Footerbar.scss';

class FooterBar extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      upworIconImage: upworkIcon
    };
    this.logout = this.logout.bind(this);
    this.imgMouseOver = this.imgMouseOver.bind(this);
    this.imgMouseLeave = this.imgMouseLeave.bind(this);
  }
  login(e) {
    e.preventDefault();
    Auth.login();
  }
  logout(e) {
    e.preventDefault();
    Auth.logout(this.props.dispatch);
  }
  imgMouseOver() {
    this.setState({ upworIconImage: upworkIconHover });
  }
  imgMouseLeave() {
    this.setState({ upworIconImage: upworkIcon });
  }
  isLinkActive = match => {
    if (!match) {
      return false;
    }
    return true;
  };
  render() {
    return (
      <footer id="myFooter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4">
        
              <ul>
                <li>
                  <NavLink exact isActive={this.isLinkActive} className="nav-link" to="/products">
                    <i className="fa fa-home" />
                    <span>الرئيسية</span>
                  </NavLink>
                </li>
                {this.props.loginStatus && (
                  <li>
                    <NavLink exact isActive={this.isLinkActive} className="nav-link" to="/orders">
                      <i className="fa fa-shopping-basket" aria-hidden="true" />
                      <span>الطلبات</span>
                    </NavLink>
                  </li>
                )}
                {!this.props.loginStatus && (
                  <li>
                    <NavLink className="nav-link" to="#" onClick={this.login}>
                      <i className="fa fa-sign-in" />
                      <span>تسجيل الدخول</span>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-sm-4">
             
              <ul>
                <li>
                  <NavLink exact className="nav-link" to="/about-us">
                    <i className="fa fa-user" />
                    <span>من نحن </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className="nav-link" to="/contact-us">
                    <i className="fa fa-envelope" />
                    <span>تواصل معنا</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div className="social-networks">
               
              </div>
              <NavLink className="btn btn-default" to="/contact-us">
                <i className="fa fa-envelope" />
                <span>تواصل معنا</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2018 Montaha . All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.allStatuses.loginStatus
  };
};

export default connect(mapStateToProps)(withRouter(FooterBar));
