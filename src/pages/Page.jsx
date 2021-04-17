import React, { Component } from 'react';
import { PageControl } from '../components/Handler';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Contact from './Contact';
import ContactGroup from './ContactGroup';
import Settings from './Settings';
import UserManagement from './UserManagement';
import NotFound from './_NotFound';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    pageSwitch(name) {
        switch (name) {
            case 'user':
                return <UserManagement />

            case 'contact':
                return <Contact />
            case 'contact/group':
                return <ContactGroup />

            case 'settings':
                return <Settings />


            default:
                return <NotFound />
        }
    }

    render() { 
        return (
            <PageControl>
                <div className="page-wrapper compact-wrapper" id="pageWrapper">
                    <Header />
                    <div className="page-body-wrapper sidebar-icon">
                        <Sidebar />
                        <div className="page-body">
                            {this.pageSwitch(this.props.name)}
                        </div>
                        {/* <Footer/> */}
                    </div>
                </div>
            </PageControl>
        );
    }
}
 
export default Page;