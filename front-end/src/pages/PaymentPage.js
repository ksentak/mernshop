import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import Meta from '../components/Meta';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentPage = ({ history }) => {
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <>
      <Meta title='MERNshop | Payment Method' />
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='PayPal'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentPage;
