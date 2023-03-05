import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css';

const TopNav = props => {
    const menuItems = ['Home', 'Community']
  return (
    // <Navbar bg="light" expand="lg" fixed="top start" >
    //   <Container>
    //     <Navbar.Brand href="#home">Image Generator</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Community</Nav.Link>
    //         <NavDropdown title="More" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Vision
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">About us</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className='navContainer'>
        <div className='navBrand'>
            Image Generator
        </div>
        {menuItems.map((item, k) => (
            <div className='itemContainer' key={k}>
                {item}
            </div>
        ))}
    </div>
  );
}

export default TopNav;