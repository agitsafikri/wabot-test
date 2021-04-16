import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Home } from 'react-feather';
import { Link } from 'react-router-dom'

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <Container fluid={true}>
                <div className="page-title">
                    <Row>
                        <Col xs="6">
                            <h3>{this.props.title}</h3>
                        </Col>
                        <Col xs="6">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/"><Home /></Link></BreadcrumbItem>
                                {
                                    (this.props.parent)
                                        ? <BreadcrumbItem>{this.props.parent}</BreadcrumbItem>
                                        : ""
                                }
                                <BreadcrumbItem active>{this.props.title}</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
 
export default Breadcrumbs;