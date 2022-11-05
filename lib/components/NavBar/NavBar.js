import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';


export const NavBar = ({textColor, bgColor}) => {

    return (
        <>
        <Navbar bg={bgColor} variant={textColor}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      )
}
NavBar.propTypes = {
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
};
