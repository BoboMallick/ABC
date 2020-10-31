import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row className="d-flex justify-content-center flex-wrap">
        

        <section className='form justify-content-center align-items-center w-50 text-center ani-frm'>


   <Form action="https://submit-form.com/mF0FK642" target="_self">
<Form.Group controlId="exampleForm.ControlInput1">
 <Form.Control type="text" name='name' placeholder="Your Name" />
 </Form.Group>

 <Form.Group controlId="exampleForm.ControlInput1">
 <Form.Control type="email" name='email' placeholder="Your Email" />
 </Form.Group>   

 <Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Control name='textarea' as="textarea" rows={3} placeholder="Enter Your Text" />
 </Form.Group>
  <Button type='submit'  className='btn btn-success w-100' varianr='sucess'>Send</Button> </Form>
  </section>


        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;







