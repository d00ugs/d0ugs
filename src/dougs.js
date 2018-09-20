import React, { Component } from 'react';
import {Container, Card, CardImg, Row, Col, CardBody, CardText} from 'reactstrap';
import me from './me.jpg';

class Dougs extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col/>
                <Col xs="3">
                    <Card>
                        <CardImg top width="100%" src={me}/>
                        <CardBody>
                        <CardText>dou.gs</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
  }
}

export default Dougs;
