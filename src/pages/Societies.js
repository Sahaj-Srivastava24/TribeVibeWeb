import React from 'react'
import SocietyCard from '../components/SocietyCard'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Societies() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>4 of 3</Col>
          <Col>5 of 3</Col>
          <Col>6 of 3</Col>
        </Row>
      </Container>
      {/* <SocietyCard /> */}
    </React.Fragment>
  )
}
