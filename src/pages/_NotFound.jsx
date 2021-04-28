import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Media } from 'reactstrap';
import sad from '../assets/images/other-images/sad.png';

class NotFound extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="page-wrapper">
                    <div className="error-wrapper">
                        <Container>
                            <Media body className="img-100" src={sad} alt="" />
                            <div className="error-heading pt-sm-3 my-2">
                                <h3 className="headline font-danger mt-0" style={{fontSize: "4rem"}}>Page Not Found</h3>
                            </div>
                            <Col md="8 offset-md-2">
                                <p className="sub-content mt-4">{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</p>
                            </Col>
                            <Link to="/contact"><Button color="danger" size='lg'>Back Home</Button></Link>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NotFound;