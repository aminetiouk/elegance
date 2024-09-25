import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Checkout.css';

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <section className='checkout'>
      <Container>
        <Row>
          <Col md={7}>
            <h2>Checkout</h2>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your full name' required />
              </Form.Group>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' required />
              </Form.Group>
              <Form.Group controlId='formAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Enter your address' required />
              </Form.Group>
              <Form.Group controlId='formCity'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='Enter your city' required />
              </Form.Group>
              <Form.Group controlId='formZip'>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type='text' placeholder='Enter your zip code' required />
              </Form.Group>
              <button className='place-order-btn' type='submit'>
                Place Order
              </button>
            </Form>
          </Col>
          <Col md={5}>
            <h2>Order Summary</h2>
            <ul>
              {cartList.map((item) => (
                <li key={item.id}>
                  {item.productName} - ${item.price} x {item.qty}
                </li>
              ))}
            </ul>
            <h3>Total Price: ${totalPrice}.00</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
