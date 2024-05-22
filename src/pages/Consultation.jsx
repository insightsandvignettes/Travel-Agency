import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ConsultationForm from '../components/ConsultationForm'; // Adjust the path if necessary
import './Consultation.css'; // Ensure you have appropriate styles if needed

const Consultation = () => {
  return (
    <Container fluid className="consultation-container d-flex flex-column justify-content-center">
      <Container className="content-container p-3">
        <h2>Consultation</h2>
        <p>Book a consultation with our travel experts.</p>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <ConsultationForm />
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-end">
            <p className="text-right">
              We help people like you to explore traveling opportunities. We would love the chance to meet with you and talk about incredible offers.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Consultation;
