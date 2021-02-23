import React from "react"
import { Link } from "gatsby"
import HomeLogo from '../../images/homelogo.svg'
import "./navbar.scss"
import Container from "../../containers"

function NavBar() {
  return (
    <div className="navbar-wrapper">
      <Container>
        <div className="navigation">
          <div className="logoWrapper">
            <img className="logo" src={HomeLogo} alt="home logo"></img>
          </div>
          <div className="links">
            <Link to="/" activeClassName="current">Home</Link>
            <Link to="/about" activeClassName="current">About</Link>
            <Link to="/contact" activeClassName="current">Contact</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
