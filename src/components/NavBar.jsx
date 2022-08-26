import React from 'react'
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavBar = ({ handleSearch, addMovie }) => {

  const [text, setText] = useState("");


  return (


    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="">Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>

            </li>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" onChange={(e) => handleSearch(e.target.value)}
            />
          </Form>
          <Form className="d-flex">
            <Form.Control
              type="addmovie"
              placeholder="Add Movie"
              className="me-2"
              aria-label="Add Movie"
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="outline-light" onClick={() => addMovie(text)(alert("new movies created :" + text))
            }>ADD</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>















  )
}

export default NavBar