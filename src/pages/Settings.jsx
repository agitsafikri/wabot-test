import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardBody, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Style from './Settings.module.scss';
import Breadcrumbs from '../components/Breadcrumb';
import { Globe, MoreHorizontal } from 'react-feather';
import qr from '../assets/images/qr-code.svg';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownMore: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(target) {
        this.setState({
            dropdownMore: (this.state.dropdownMore) ? false : true
        })
    }

    render() { 
        return (
            <React.Fragment>
                <Helmet title="Settings - Whatsapp Bot" />
                <Breadcrumbs title="Settings" />
                <Container fluid={true}>
                    <div className="row">
                        <div className="col-12 col-xl-5">
                            <Card>
                                <CardBody>
                                    <div className="row d-flex justify-content-between align-items-center mx-0 mb-3">
                                        <h5 className="mt-1">Session</h5>
                                        <div className="d-flex align-items-center text-danger">
                                            <div className={`${Style.dot}`} />
                                            Offline
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-4 d-flex justify-content-center">
                                            <img src={qr} alt=""/>
                                        </div>
                                        <div className="col-6 pr-2">
                                            <button className="btn btn-success px-2" style={{width: '100%'}}>
                                                Generate New
                                            </button>
                                        </div>
                                        <div className="col-6 pl-2">
                                            <button className="btn btn-info px-2" style={{width: '100%'}}>
                                                Refresh Status
                                            </button>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-xl-7">
                            <Card color="primary">
                                <CardBody style={{position: 'relative', overflow: 'hidden'}}>
                                    <Globe size={200} className={`${Style.cardIcon}`}/>
                                    <div className="row d-flex justify-content-between align-items-center mx-0 mb-4">
                                        <h5 className="mt-1">Your Profile</h5>
                                        <Dropdown isOpen={this.state.dropdownMore} toggle={this.toggleDropdown} >
                                            <DropdownToggle color="" className={`${Style.btnBg}`}>
                                                <MoreHorizontal />
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>Edit Profile</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-4 pr-0">
                                            Name
                                        </div>
                                        <div className="col-8 font-weight-bold">
                                            Rizal Purnomo
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-4 pr-0">
                                            Phone
                                        </div>
                                        <div className="col-8 font-weight-bold">
                                            +62 896 0265 3343
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-4 pr-0">
                                            Registration Date
                                        </div>
                                        <div className="col-8 font-weight-bold">
                                            April 15, 2021
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-4 pr-0">
                                            End Period
                                        </div>
                                        <div className="col-8 font-weight-bold">
                                            3 Days Left
                                        </div>
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
 
export default Settings;