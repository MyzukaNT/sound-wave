import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../../Footer";


export default function Join() {
  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="formJoinEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJoinEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formJoinPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Join Now
        </Button>
       
    </Form>
    <Footer />
    </>
  );
}