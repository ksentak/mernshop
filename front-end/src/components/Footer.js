import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Keaton Sentak</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
