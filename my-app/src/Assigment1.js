import React from "react";
import Firstcomponent from "./Firstcomponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';


function Dashboard(){
const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return(
<>
<div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Button variant="primary" onClick={handleShow} style={{marginRight:'50px',marginBottom:'0px'}}>
        Launch 
      </Button>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
        
            <Nav.Link href="#home">Home</Nav.Link>
            
             <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2>Profile Menu</h2></Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
      
      <ListGroup.Item variant="primary">Name</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Fathers Name
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        mobile No
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Email No
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Pincode
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        City
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        State
      </ListGroup.Item>
      
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      <br></br>
      <Stack direction="horizontal" gap={3} style={{backgroundColor:' light grey'}}>
      <div className="p-2"> Menu</div>
      <div className="p-2 ms-auto">Working</div>
      <div className="p-2">Setting</div>
    </Stack>
      <br></br>
      <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
      <Card style={{ backgroundColor:'yellow', width:'18rem', display:'flex', justifyContent:'center', alignContent:'center', padding:50 }}>
      <Card.Body>
        <Card.Title> LOG-IN </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">

        </Card.Subtitle>
        <Card.Text>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    </div>
    
</div>
</>
 )
}

export default Dashboard;