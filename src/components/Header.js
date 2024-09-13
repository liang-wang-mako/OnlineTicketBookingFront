import { Link } from 'react-router-dom'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
  const [active, setActive] = useState('')
  const handleClick = (event) => {
    if (event.target.id === '0') {
      setActive('1')
    } else {
      setActive(event.target.id)
    }
  }

  return (
    <Navbar
      expand="lg"
      className="container-xl container-fluid"
    >
      <Container className="container-xl container-fluid">
        <nav
          class="navbar navbar-expand-sm container-fluid"
          data-bs-theme="dark"
        >
          <div class="container-fluid nav-container">
            <Link
              key={0}
              id="0"
              onClick={handleClick}
              to="/"
              class="d-flex align-items-center mb-md-0 me-auto link-body-emphasis text-decoration-none"
            >
              <img
                src="../images/logo/logo.png"
                // src={`url("images/log/logo.png")`}
                // src="./images/logo/Logo.png"
                alt="logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav class="ms-auto">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link
                      key={1}
                      id="1"
                      onClick={handleClick}
                      to="/"
                      class={`nav-link link-body-emphasis px-3 ${
                        window.location.pathname.length === 1 || active === '1'
                          ? 'link-active'
                          : ''
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      key={2}
                      id="2"
                      onClick={handleClick}
                      to="/upcomingmovies"
                      class={`nav-link link-body-emphasis px-3 ${
                        window.location.pathname.includes('upcomingmovies') ||
                        active === '2'
                          ? 'link-active'
                          : ''
                      }`}
                    >
                      Upcoming Movies
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      key={3}
                      id="3"
                      onClick={handleClick}
                      to="discount"
                      class={`nav-link link-body-emphasis px-3 ${
                        window.location.pathname.includes('discount') ||
                        active === '3'
                          ? 'link-active'
                          : ''
                      }`}
                    >
                      Discount
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      key={4}
                      id="4"
                      onClick={handleClick}
                      to="cafemenu"
                      class={`nav-link link-body-emphasis px-3 ${
                        window.location.pathname.includes('cafemenu') ||
                        active === '4'
                          ? 'link-active'
                          : ''
                      }`}
                    >
                      Cafe Menu
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      key={5}
                      id="5"
                      onClick={handleClick}
                      to="contactus"
                      class={`nav-link link-body-emphasis px-3 ${
                        window.location.pathname.includes('contactus') ||
                        active === '5'
                          ? 'link-active'
                          : ''
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
        </nav>
      </Container>
    </Navbar>
  )
}
