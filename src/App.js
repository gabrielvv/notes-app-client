import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Auth } from 'aws-amplify'

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [user, setUser] = useState(null)
  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push('/login');
  }

  useEffect(() => {
    onLoad();
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession();
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {isAuthenticated
              ? <NavItem onClick={handleLogout}>Logout</NavItem>
              : <>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated, user }} />
    </div>
  );
}

export default withRouter(App);
