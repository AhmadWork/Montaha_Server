import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payment from './Payment';
import Container from './modal/Container';

import Auth from '../AuthService/Auth';
class Header extends Component {
    componentDidMount(){
        console.log(Auth.isAuthenticated());
    }
     onSubmit  (event)  {
        Auth.login()
        
      };
renderContent(){
switch(this.auth){
    case null :
return;
    case false:
return    
    default:
    return ([
        <li key="0"><Payment /></li>,
    <li key="1" style={{margin:'0 10px'}}>credits:{this.props.auth.credits}</li>,
    <li key="2"><a href="/api/user/logout">Logout</a></li>
    
  
   
]);
    
    
}
}
    render(){
        console.log(this.props);
        return(
            <nav>
            <div className="nav-wrapper">
              <Link 
              to={this.props.auth? '/survey': '/'}  
              className="left brand-logo"
              >Montaha</Link>

              <ul  className="right">
              <li
            onClick={this.onSubmit} 
            
      >sign in</li>
                
              </ul>
            </div>
          </nav>
        )
    }
}
function mapStateToProps ({auth}){
    return {auth};
}

export default connect(mapStateToProps) (Header) ;