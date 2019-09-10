import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FadeCSSTransitionWrapper } from '../AnimatedWrappers';

const NotFound = props => {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 - الصفحة غير موجودة</title>
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="alert alert-danger">
            الصفحة التي تبحث عنها غير موجودة توجه الى  <Link to="/products">الصفحة الرئيسية</Link>.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FadeCSSTransitionWrapper(NotFound);
