import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import * as Icons from 'react-feather';
import Breadcrumbs from '../components/Breadcrumb';
import CountUp from 'react-countup';
import DataTable from 'react-data-table-component';
import { Helmet } from 'react-helmet';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableColumns: [
                {
                    name: 'ID',
                    selector: 'id', 
                    sortable: true,
                    center:true,
                },
                {
                    name: 'Name',
                    selector: 'name',
                    sortable: true,
                    center:true,
                },
                {
                    name: 'Phone Number',
                    selector: 'phone',
                    sortable: true,
                    center:true,
                }
            ],
            tableData: [
                {
                    id: 1,
                    name: "Fenny Feronika",
                    phone: "+6289602653343"
                },
                {
                    id: 2,
                    name: "Fenny Feronika",
                    phone: "+6289602653343"
                },
                {
                    id: 3,
                    name: "Fenny Feronika",
                    phone: "+6289602653343"
                },
                {
                    id: 4,
                    name: "Fenny Feronika",
                    phone: "+6289602653343"
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Helmet title="Contact List - Whatsapp Bot" />
                <Breadcrumbs parent="Contact" title="Contact List" />
                <Container fluid={true}>
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="row">
                                <div className="col-12">
                                    <Card className="o-hidden">
                                        <CardBody className="bg-primary b-r-4 card-body">
                                            <div className="media static-top-widget">
                                                <div className="align-self-center text-center"><Icons.Phone /></div>
                                                <div className="media-body"><span className="m-0">Total Contact</span>
                                                    <h4 className="mb-0 counter"><CountUp end={256} /></h4><Icons.Phone className="icon-bg" />
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-12">
                                    <Card>
                                        <CardHeader className="py-4">
                                            <h5 className="mt-1">New Contact</h5>
                                        </CardHeader>
                                        <CardBody className="py-4">
                                            <Form>
                                                <FormGroup>
                                                    <Label>Name</Label>
                                                    <Input placeholder="Enter name" type="text"></Input>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>Phone Number</Label>
                                                    <InputGroup>
                                                        <InputGroupAddon addonType="prepend">
                                                            +62
                                                        </InputGroupAddon>
                                                        <Input placeholder="Enter number" type="number"></Input>
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="pt-2">
                                                    <Button color="primary" style={{width: "100%"}}>
                                                        Add Contact
                                                    </Button>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <Card>
                                <CardHeader className="py-4">
                                    <h5 className="mt-1">Contact List</h5>
                                </CardHeader>
                                <CardBody style={{minHeight: "27rem"}}>
                                    <DataTable
                                        searching={true}
                                        data={this.state.tableData}
                                        columns={this.state.tableColumns}
                                        striped={true}
                                        center={true}
                                        noHeader={true}
                                        selectableRows
                                        persistTableHead
                                        pagination={true}
                                    />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default Contact;