import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo-primary.svg';
import "./Header.css";
import { Link } from 'react-router-dom';
import { BsChevronDown, BsSearch, BsPerson, BsCart, BsHeart,  } from "react-icons/bs";

function NavScrollExample() { 
  return (
    <Navbar style={{ backgroundColor: "#ffe0d8" }}>
      <Container className='ps-0 pe-0 '>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" width="150" />
        </Navbar.Brand>
        <Nav className="mx-auto text-black">
          <Nav.Link as={Link} to="/" style={{ color: "black", padding: "30.4px 20.8px"}}>
            Home <BsChevronDown size={15} className="ms-1 fs-6 fw-bold" />
          </Nav.Link>
          <Nav.Link as={Link} to="/OurStory" style={{ color: "black", padding: "30.4px 20.8px"}}>
            Our Story
          </Nav.Link>
          <Nav.Link as={Link} to="/" style={{ color: "black", padding: "30.4px 20.8px" }}>
            Shop <BsChevronDown size={15} className="ms-1" />
          </Nav.Link>
          <Nav.Link as={Link} to="/" style={{ color: "black", padding: "30.4px 20.8px" }}>
            Blog <BsChevronDown size={15} className="ms-1" />
          </Nav.Link>
          <Nav.Link as={Link} to="/" style={{ color: "black", padding: "30.4px 20.8px"  }}>
            Pages <BsChevronDown size={15} className="ms-1" />
          </Nav.Link>
          <Nav.Link as={Link} to="/" style={{ color: "black", padding: "30.4px 20.8px"  }}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ color: "black", padding: "20px 10px"}}>
            <BsSearch size={20} className="fw-bolder" />
          </Nav.Link>
          <Nav.Link style={{ color: "black", padding: "20px 10px" }}>
            <BsPerson size={20}  />
          </Nav.Link>
          <Nav.Link style={{ color: "black", padding: "20px 10px" }}>
            <BsHeart size={20}  />
          </Nav.Link>
          <Nav.Link style={{ color: "black", padding: "20px 10px" }}>
            <BsCart size={20}  />
          </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;