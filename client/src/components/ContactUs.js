import React from 'react';
import { Helmet } from 'react-helmet';
import upworkIcon from '../assets/upwork.svg';
import upworkIconHover from '../assets/upwork-hover.svg';
import '../styles/ContactUs.scss';

export default class ContactUs extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      upworIconImage: upworkIconHover
    };
    this.imgMouseOver = this.imgMouseOver.bind(this);
    this.imgMouseLeave = this.imgMouseLeave.bind(this);
  }
  imgMouseOver() {
    this.setState({ upworIconImage: upworkIcon });
  }
  imgMouseLeave() {
    this.setState({ upworIconImage: upworkIconHover });
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <div className="row justify-content-center contact-us-page">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Contact Us</h5>
              </div>
              <div className="card-body">
                <div className="list-group social-networks">
              
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
