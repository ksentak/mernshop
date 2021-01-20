import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>MERNshop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto mr-4'>
            <Nav.Link href='/cart'>
              <FontAwesomeIcon className='mr-1' icon={faShoppingCart}></FontAwesomeIcon>Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              {' '}
              <FontAwesomeIcon className='mr-1' icon={faUser}></FontAwesomeIcon>Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
