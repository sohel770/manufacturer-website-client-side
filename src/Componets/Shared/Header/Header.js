import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../Pages/CustomLink/CustomLink';
import "./Header.css"

const Header = () => {

  const [user]=useAuthState(auth);
  const handleSignOut=() => {
    signOut(auth)
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="myColor" variant="dark">
        <Container>
        <Navbar.Brand to="/" style={{color: 'yellow', fontSize:"20px",fontFamily:"BIZ UDPGothic"}}>Car biz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <CustomLink  to="/">Home</CustomLink>
            <CustomLink  to="/blogs">Blogs</CustomLink>    
            <CustomLink  to="/portfolio">Portfolio</CustomLink>  
            <CustomLink  to="/services">Services</CustomLink> 

             {
              user ? <>
              <CustomLink  to="/addProducts">Add Products</CustomLink>
              <CustomLink  to="/myOrders">My items</CustomLink>
              <CustomLink  to="/manageInventories">Manage Items</CustomLink>
              <button className="signOut_click" onClick={handleSignOut}>Sign out</button>
              <span style={{color:'white', paddingLeft: '10px', fontSize:'20px'}}>{user?.displayName}</span>
              
              </>
              :<CustomLink  to="/login">Login</CustomLink>
            } 
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
