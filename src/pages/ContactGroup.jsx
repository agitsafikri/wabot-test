import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { Helmet } from 'react-helmet';
import { Card, CardBody, CardHeader, Container } from 'reactstrap';
import Breadcrumbs from '../components/Breadcrumb';

class ContactGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableColumns: [
                {
                    name: 'Name',
                    selector: 'name',
                    sortable: true,
                    center:true,
                },
                {
                    name: 'Phone Number',
                    selector: 'amount',
                    sortable: true,
                    center:true,
                }
            ],
            tableData: [
                {
                    id: 1,
                    name: "Langganan",
                    amount: 23
                },
                {
                    id: 2,
                    name: "Baru",
                    amount: 23
                },
                {
                    id: 3,
                    name: "Lama",
                    amount: 23
                },
                {
                    id: 4,
                    name: "Fenny Feronika",
                    amount: 23
                },
                {
                    id: 5,
                    name: "Fenny Feronika",
                    amount: 23
                }
            ]
        }
    }
    render() { 
        return (
            <React.Fragment>
                <Helmet title="Contact Group - Whatsapp Bot" />
                <Breadcrumbs parent="Contact" title="Contact Group" />
                <Container fluid={true}>
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <Card>
                                <CardHeader className="py-4">
                                    <h5 className="mt-1">Group List</h5>
                                </CardHeader>
                                <CardBody className="py-4">
                                    <DataTable
                                        searching={true}
                                        striped={true}
                                        center={true}
                                        noHeader={true}
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
 
export default ContactGroup;