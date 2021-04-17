import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { PlusCircle } from 'react-feather';
import { Helmet } from 'react-helmet';
import { Card, CardBody, CardHeader, Container } from 'reactstrap';
import Breadcrumbs from '../components/Breadcrumb';
import Style from './ContactGroup.module.scss';

class ContactGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "Customer",
                    active: true
                },
                {
                    name: "Distributor",
                    active: false
                },
                {
                    name: "Personal",
                    active: false
                },
                {
                    name: "Group",
                    active: false
                }
            ],
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
            ],
            dataShow: {
                name: "",
                amount: ""
            }
        }

        this.show = this.show.bind(this);
    }

    show(index) {
        console.log(index);
        let state = this.state;
        console.log("masuk")

        state.dataShow.name = state.data[index].name;

        for(let i in state.data) {
            console.log(i, index)
            if(parseInt(i) === index) {
                console.log("masuk hey")
                state.dataShow.name = state.data[index].name;
                state.data[i].active = true;
            }else{
                state.data[i].active = false;
            }
        }

        this.setState({
            data: state.data,
            dataShow: state.dataShow
        })
    }

    componentDidMount() {
        this.show(0);
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
                                <CardBody className="px-2 py-3">
                                    <div className={`px-4 overflow-auto ${Style.group}`} style={{maxHeight: "38rem"}}>
                                        <div className={`row d-flex align-items-center justify-content-center text-primary ${Style.groupList}`}>
                                            <PlusCircle size={22}/><span className="mx-2" style={{fontWeight: 500}}>Create New Group</span>
                                        </div>
                                        {
                                            this.state.data.map((value, index) => {
                                                return (
                                                    <div className={`row d-flex align-items-center ${Style.groupList} ${(value.active) ? Style.active : ""}`} onClick={() => { this.show(index) }} index={index} key={index}>
                                                        <div className="text-uppercase bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: "2.5rem", height: "2.5rem"}}>
                                                            {value.name.substr(0, 2)}
                                                        </div>
                                                        <span className={Style.text}>{value.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-xl-8">
                            <Card>
                                <CardHeader className="d-flex justify-content-between align-items-center py-4 mx-0">
                                    <h5 className="mt-1">{this.state.dataShow.name}</h5>
                                    <span style={{fontSize: "1rem"}}>2 Contacts</span>
                                </CardHeader>
                                <CardBody style={{minHeight: "35rem"}}>
                                    <div className="row mb-3">
                                        <div className="col-12 col-sm-4 mb-3 pr-xl-2">
                                            <button className="btn btn-success px-1" style={{width: "100%"}}>
                                                Add Contact
                                            </button>
                                        </div>
                                        <div className="col-12 col-sm-4 mb-3 px-xl-2">
                                            <button className="btn btn-primary px-1" style={{width: "100%"}}>
                                                Change Group Name
                                            </button>
                                        </div>
                                        <div className="col-12 col-sm-4 mb-3 pl-xl-2">
                                            <button className="btn btn-danger px-1" style={{width: "100%"}}>
                                                Delete Group
                                            </button>
                                        </div>
                                    </div>
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
 
export default ContactGroup;