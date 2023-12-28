import React from 'react'

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Firstcomponent()
{
    return(
    <>
    <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
       <Card style={{ backgroundColor:'yellow', width:'18rem' }}>
      <Card.Body>
        <Card.Title> Ankesh Gajbhiye</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dekho magar pyar se</Card.Subtitle>
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
    </>
    

    )
}
export default Firstcomponent;