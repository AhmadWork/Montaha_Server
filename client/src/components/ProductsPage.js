import React, { Component } from 'react'
import {ProductCard} from 'react-ui-cards'
import { Container, Row, Col } from 'reactstrap';
import { addToCart } from '../actions/cart-action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class ProductsPage extends Component {
  render(){
    return (
<Container>
  <Row>
    <Col xs="6" sm="4">
    <ProductCard
          photos={[
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          ]}
          price='$9'
          productName="Coffee 250g"
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={3}
          url={addToCart}
        />
    </Col>
    <Col xs="6" sm="4">
    <ProductCard
          photos={[
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          ]}
          price='$19'
          productName='Coffee 500g'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={3}
          url={addToCart}
        />
    </Col>
    <Col xs="6" sm="4">
    <ProductCard
          photos={[
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
            'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          ]}
          price='$59'
          productName='Coffee 750g'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={3}
          url={addToCart}
        />
    </Col>
    <Col xs="6" sm="4">
    <ProductCard
        photos={[
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
        ]}
          price='$199'
          productName='Coffee 1kg'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={3.5}
          url= '/products/5a3fde195b36df0ff4a4d443'
        />
    </Col>
    <Col xs="6" sm="4">
    <ProductCard
         photos={[
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
        ]}
          price='$299'
          productName='Coffee 2kg'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={3}
          url={addToCart}
        />
    </Col>
    <Col xs="6" sm="4">
    <ProductCard
        photos={[
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
          'https://sc01.alicdn.com/kf/HTB1drHvIFXXXXbrXFXXq6xXFXXXS/250g-Coffee-Packaging-Bags-Custom-Printed-Coffee.jpg_350x350.jpg',
        ]}
          price='$399'
          productName='Coffee 5Kg'
          description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
          rating={5}
          url={addToCart}
        />
    </Col>
  </Row>
</Container>
    )
  }
}
 export default connect(null, { addToCart })( ProductsPage );