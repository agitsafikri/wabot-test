import React, { Component } from 'react';
import CountUp from 'react-countup';
import * as Icons from 'react-feather';
import { Helmet } from 'react-helmet';
import { Card, CardBody, CardHeader, Container, Table } from 'reactstrap';
import Breadcrumb from '../components/Breadcrumb';

class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <Helmet title="User Management - Whatsapp Bot" />
                <Breadcrumb title="User Management" />
                <Container fluid={true}>
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <Card className="o-hidden">
                                <CardBody className="bg-primary b-r-4 card-body">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center"><Icons.Users /></div>
                                        <div className="media-body"><span className="m-0">Total User</span>
                                            <h4 className="mb-0 counter"><CountUp end={256} /></h4><Icons.Users className="icon-bg" />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4 col-12">
                            <Card className="o-hidden">
                                <CardBody className="bg-success b-r-4 card-body">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center"><Icons.CheckCircle /></div>
                                        <div className="media-body"><span className="m-0">Payment Done</span>
                                            <h4 className="mb-0 counter"><CountUp end={230} /></h4><Icons.CheckCircle className="icon-bg" />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4 col-12">
                            <Card className="o-hidden">
                                <CardBody className="bg-danger b-r-4 card-body">
                                    <div className="media static-top-widget">
                                        <div className="align-self-center text-center"><Icons.AlertCircle /></div>
                                        <div className="media-body"><span className="m-0">Payment Overdue</span>
                                            <h4 className="mb-0 counter"><CountUp end={26} /></h4><Icons.AlertCircle className="icon-bg" />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="xl-100 box-col-12 col-12">
                            <Card>
                                <CardHeader>
                                    <h5>Employee Status</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="user-status table-responsive">
                                    <Table borderless>
                                        <thead>
                                        <tr>
                                            <th scope="col" style={{width: "45%"}}>Name</th>
                                            <th scope="col" style={{width: "25%"}}>Payment</th>
                                            <th scope="col" style={{width: "30%"}}>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                    <img className="img-radius align-top m-r-15 rounded-circle" src="https://i.pinimg.com/originals/e0/7d/06/e07d0688389b79d19a014fd12d9bea28.jpg" alt="" style={{objectFit: "cover", width: "2.5rem", height: "2.5rem" }}/>
                                                    <div className="d-inline-block">
                                                        <h6>Rizal Purnomo</h6>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td>Done</td>
                                                <td>
                                                    <button className="btn btn-primary mr-2">Edit Detail</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="bd-t-none u-s-tb">
                                                    <div className="align-middle image-sm-size">
                                                    <img className="img-radius align-top m-r-15 rounded-circle" src="https://i.pinimg.com/originals/e0/7d/06/e07d0688389b79d19a014fd12d9bea28.jpg" alt="" style={{objectFit: "cover", width: "2.5rem", height: "2.5rem" }}/>
                                                    <div className="d-inline-block">
                                                        <h6>Rizal Purnomo</h6>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td>Done</td>
                                                <td>
                                                    <button className="btn btn-primary mr-2">Edit Detail</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default UserManagement;