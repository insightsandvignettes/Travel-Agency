import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './ConsultationForm.css'; // Make sure to create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

const ConsultationForm = () => {
  return (
    <Container className="consultation-form-container">
    <FontAwesomeIcon icon={ faUsersViewfinder}  style={{color:'red', fontSize:20}}/>
      <h2 className="mb-4 font-bold">Book a Consultation</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label> Message </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="secondary" type="submit" className="mt-3 w-full bg-red-600 justify-center">
          Book Appointment
        </Button>
      </Form>
    </Container>
  );
};

export default ConsultationForm;
