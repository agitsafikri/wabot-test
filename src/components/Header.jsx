import React, { Component } from 'react';
import * as Icons from 'react-feather';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.checkWidth = this.checkWidth.bind(this);
    }

    goFull() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    toggleSidebar() {
        if(document.querySelector(".sidebar-wrapper").classList.contains("close_icon")){
            document.querySelector(".page-header").className = "page-header";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
        }else{
            document.querySelector(".page-header").className = "page-header close_icon";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon ";
        }
    }

    checkWidth() {
        if(window.innerWidth <= 991){
            document.querySelector(".page-header").className = "page-header close_icon";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon ";
        }else{
            document.querySelector(".page-header").className = "page-header";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
        }

        this.setState({
            width: window.innerWidth
        })
    }

    componentDidMount() {
        this.checkWidth()
        
        window.addEventListener("resize", () => {
            this.checkWidth()
        })        
    }

    render() { 
        return (
            <React.Fragment>
                <div className="page-header">
                    <div className="row header-wrapper m-0">
                        <div className="header-logo-wrapper col">
                            <div className="toggle-sidebar" onClick={this.toggleSidebar} style={(this.state.width <= 991) ? {display:"block"} : {display:"none"}}>
                                <Icons.Menu className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
                            </div>
                        </div>
                        <div className="nav-right col-auto ml-10 pull-right right-header p-0">
                            <ul className="nav-menus">
                                <li className="onhover-dropdown">
                                    <div className="notification-box"><Icons.Bell /><span className="badge badge-pill badge-secondary">2</span></div>
                                    <ul className="notification-dropdown onhover-show-div">
                                        <li>
                                            <Icons.Bell />
                                            <h6 className="f-18 mb-0">Notification</h6>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o mr-3 font-primary"></i>Delivery<span className="pull-right">{"10 min."}</span></p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o mr-3 font-primary"></i>Delivery<span className="pull-right">{"10 min."}</span></p>
                                        </li>
                                        <li>
                                            <p><i className="fa fa-circle-o mr-3 font-primary"></i>Delivery<span className="pull-right">{"10 min."}</span></p>
                                        </li>
                                        <li>
                                            <button className="btn btn-primary" >Check All Notification</button>
                                        </li>
                                    </ul>
                                </li>
                                <li className="maximize">
                                    <a className="text-dark" href="#javascript" onClick={this.goFull}>
                                        <Icons.Minimize />
                                    </a>
                                </li>
                                <li className="profile-nav onhover-dropdown p-0">
                                    <div className="media profile-media">
                                        <img className="b-r-10" src="https://i.pinimg.com/originals/e0/7d/06/e07d0688389b79d19a014fd12d9bea28.jpg" alt="avatar" style={{objectFit: "cover"}}/>
                                        <div className="media-body">
                                            <span>Rizal Purnomo</span>
                                            <p className="mb-0 font-roboto">User <i className="middle fa fa-angle-down"></i></p>
                                        </div>
                                    </div>
                                    <ul className="profile-dropdown onhover-show-div">
                                        <li onClick={() => { localStorage.clear(); window.location.reload() }}>
                                            <Icons.LogIn />
                                            <span>Log Out</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Header;