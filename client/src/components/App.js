



import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { FadeCSSTransitionWrapper } from './AnimatedWrappers';
import AboutUs from './AboutUs';
import Alert from './Alert';
import ContactUs from './ContactUs';
import FooterBar from './FooterBar';
import NavigationBar from './NavigationBar';
import CallBack from './CallBack';
import NewProduct from './products/NewProduct';
import Products from './ProductsPage';
import Orders from './Orders';
import OrderDetail from './Orders/OrderDetail';
import Checkout from './Checkout';
import NotFound from './NotFound';
import MiniCart from './sidebar/MiniCart';
import '../styles/App.scss';
import Header from './Header';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      isOpen: false,
      isDropDownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleDropdown(e) {
    e.preventDefault();
    if (e.target.id === 'navbarDropdownMenuLink') {
      this.setState({
        isDropDownOpen: !this.state.isDropDownOpen
      });
    } else if (this.state.isDropDownOpen) {
      this.setState({
        isDropDownOpen: false
      });
    }
  }
  render() {
    return (
              <div className="page" onClick={this.toggleDropdown}>

        <NavigationBar
          {...this.props}
          toggle={this.toggle}
          isOpen={this.state.isOpen}
          isDropDownOpen={this.state.isDropDownOpen}
        />
        <div className="container-fluid">
          <Alert />
          <div className="row">
            <div className="col-md-3 sidebar">
              <MiniCart />
            
            </div>
            <TransitionGroup className="col-md-9 main-content">
              <Switch>
                <Route path="/callback" component={CallBack} />
                <Route path="/home" component={Products} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/products/new" component={NewProduct} />
                <Route path="/products" exact component={Products} />
                <Route
                  path="/orders/:orderId"
                  render={props => {
                    const Temp = FadeCSSTransitionWrapper(OrderDetail);
                    return <Temp {...props} />;
                  }}
                />
                <Route
                  path="/order-success/:orderId"
                  render={props => {
                    const Temp = FadeCSSTransitionWrapper(OrderDetail);
                    return <Temp {...props} />;
                  }}
                />
                <Route path="/orders" exact component={Orders} />
                <Route path="/cart/checkout" component={Checkout} />
                <Route path="/category/:categoryName" exact component={Products} />
                <Redirect exact from="/" to="/products" />
                <Route component={NotFound} />
              </Switch>
            </TransitionGroup>
          </div>
        </div>
        <FooterBar {...this.props} />
      </div>
    );
  }
}

export default App;
