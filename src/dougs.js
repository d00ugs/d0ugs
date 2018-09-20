import React, { Component } from 'react';
import {Card, CardImg, Col, CardBody, CardText} from 'reactstrap';
import me from './me.jpg';

class Dougs extends Component {
  render() {
    return (
        <Col xs="3">
            <Card>
                <CardImg top width="30%" src={me}/>
                <CardBody>
                <CardText>dou.gs</CardText>
                </CardBody>
            </Card>
        </Col>
    );
  }
}

export default Dougs;
