import React, { Component } from 'react';
import * as Icons from 'react-feather';
import { Link, NavLink } from 'react-router-dom';
import Structure from '../config/Sidebar.json';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggle: true,
            data: Structure
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.toggleShow = this.toggleShow.bind(this);

        this.check = this.check.bind(this)
    }

    responsiveSidebar() {
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon"
    }

    toggleSidebar() {
        if(this.state.isToggle){
            this.setState({
                isToggle: false
            }, () => {
                document.querySelector(".page-header").className = "page-header close_icon";
                document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
            })
        }else{
            this.setState({
                isToggle: true
            }, () => {
                document.querySelector(".page-header").className = "page-header";
                document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
            })
        }
    }

    toggleShow(event) {
        let value = parseInt(event.currentTarget.id.slice(7));
        let data = this.state.data;

        if(data[value].show) {
            data[value].show = false;
        }else{
            data[value].show = true;
        }

        this.setState({
            data: data
        })
    }

    check() {
        console.log("dicek loh")
        let stateData = this.state.data;

        for(let i=0 ; i<stateData.length ; i++) {
            if(stateData[i].child.length > 0) {
                let data = document.getElementsByClassName("sidebar-list")[i].children[1].children;
                let status = false;
                console.log(data);
                
                for(let j=0 ; j<data.length ; j++) {
                    console.log("check", document.getElementsByClassName("sidebar-list")[i].children[0].classList)
                    if(data[j].children[0].classList.value === "active") {
                        document.getElementsByClassName("sidebar-list")[i].children[0].classList.add('active');
                        status = true;
                    }
                }

                if(!status) {
                    document.getElementsByClassName("sidebar-list")[i].children[0].classList.remove('active');
                }
    
                if(document.getElementsByClassName("sidebar-list")[i].children[0].classList.contains('active')) {
                    stateData[i].show = true;
                }
            }
        }

        this.setState({
            data: stateData
        })
    }

    componentDidMount() {
        this.check();
    }

    render() {
        return (
            <React.Fragment>
                <div className="sidebar-wrapper" id="sidebar-wrapper">
                    <div className="logo-wrapper">
                        <Link to="/">
                            <img className="img-fluid for-light" alt="" />
                        </Link>
                        <div className="back-btn" onClick={this.responsiveSidebar}><i className="fa fa-angle-left"></i></div>
                        <div className="toggle-sidebar" onClick={this.toggleSidebar}>
                            <Icons.Menu className="status_toggle middle sidebar-toggle" />
                        </div>
                    </div>
                    <div className="logo-icon-wrapper">
                        <Link to="/">
                        <img className="img-fluid"  alt="" /></Link>
                    </div>
                    <nav className="sidebar-main">
                        <div id="sidebar-menu">
                            <ul className="sidebar-links custom-scrollbar">
                                <li className="back-btn">
                                    <div className="mobile-back text-right"><span>{"Back"}</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                </li>
                                <li className="sidebar-main-title">
                                    <div>
                                        <h6>General</h6>
                                        <p>Dashboards,widgets & layout.</p>
                                    </div>
                                </li>
                                
                                {
                                    this.state.data.map((value, i) => {
                                        const TitleIcon = Icons[value.icon];
                                        if(value.child.length === 0) {
                                            return (
                                                <li className="sidebar-list" key={i}>
                                                    <NavLink exact to={value.path} className="sidebar-link sidebar-title" onClick={() => { window.setTimeout(() => { this.check() }, 500) }}>
                                                        <TitleIcon />
                                                        <span>{value.name}</span>
                                                    </NavLink>
                                                </li>
                                            )
                                        }
                                        return (
                                            <li className="sidebar-list" key={i}>
                                                <a className={"sidebar-link sidebar-title"} id={"sidebar" + i} onClick={this.toggleShow} href="#javascript">
                                                    <TitleIcon />
                                                    <span>{value.name}</span>
                                                    <div className="according-menu">
                                                        {
                                                            (value.show)
                                                                ? <i className="fa fa-angle-down"></i>
                                                                : <i className="fa fa-angle-right"></i>
                                                        }
                                                    </div>
                                                </a>
                                                <ul className="sidebar-submenu" style={value.show ? this.state.isToggle ? { opacity: 1, transition: 'opacity 500ms ease-in' } : { display: "block" } : { display: "none" }}>
                                                    {
                                                        value.child.map((subvalue, j) => {
                                                            return(
                                                                <li key={j}>
                                                                    <NavLink exact to={subvalue.path} onClick={() => { window.setTimeout(() => { this.check() }, 10) }}>{subvalue.name}</NavLink>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    })
                                }


                                {/* <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title" href="#">
                                        <Icons.Home />
                                        <span>Dashboard</span>
                                        <div className="according-menu">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </a>
                                    <ul className="sidebar-submenu">
                                        <li><a className="active" href="index.html">Default</a></li>
                                        <li><a href="dashboard-02.html">Ecommerce</a></li>
                                    </ul>
                                </li> */}

                                <div>

                            {
                            /* MENUITEMS.map((Item, i) =>
                            <Fragment key={i}>
                                {Item.Items.map((menuItem, i) =>
                                <li className="sidebar-list" key={i}>
                                    <a className={`sidebar-link sidebar-title  ${menuItem.active ? 'active' : ''}`} href="#javascript" onClick={() => setNavActive(menuItem)}>
                                        <menuItem.icon />
                                        <span>{props.t(menuItem.title)}</span>
                                        <label className={menuItem.badge}>{menuItem.badgetxt}</label>
                                        <div className="according-menu">
                                            {menuItem.active ?
                                            <i className="fa fa-angle-down"></i>
                                            : <i className="fa fa-angle-right"></i>
                                            }
                                        </div>
                                    </a>
                                : ''}
                                    {(menuItem.type === 'link') ?
                                    <Link  to={menuItem.path} className={`sidebar-link sidebar-title link-nav  ${menuItem.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                                    <menuItem.icon />
                                    <span>{props.t(menuItem.title)}</span>
                                    {menuItem.badge ? <label className={menuItem.badge}>{menuItem.badgetxt}</label> : ""}
                                    </Link>
                                    : ''}
                                    {menuItem.children ?
                                    <ul className="sidebar-submenu"
                                    style={menuItem.active ? sidebartoogle ? { opacity: 1, transition: 'opacity 500ms ease-in' } : { display: "block" } : { display: "none" }}>
                                    {menuItem.children.map((childrenItem, index) => {
                                    return (
                                <li key={index}>
                                    {(childrenItem.type === 'sub') ?
                                    <a className={`${childrenItem.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(childrenItem)}>{props.t(childrenItem.title)}
                                    <span className="sub-arrow">
                                    <i className="fa fa-chevron-right"></i>
                                    </span>
                                    <div className="according-menu">
                                        {childrenItem.active ?
                                        <i className="fa fa-angle-down"></i>
                                        : <i className="fa fa-angle-right"></i>
                                        }
                                    </div>
                                    </a>
                                    : ''}
                                    {(childrenItem.type === 'link') ?
                                    <Link  to={childrenItem.path} className={`${childrenItem.active ? 'active' : ''}`} onClick={() => toggletNavActive(childrenItem)}>{props.t(childrenItem.title)}</Link>
                                    : ''}
                                    {childrenItem.children ?
                                    <ul className="nav-sub-childmenu submenu-content"
                                    style={childrenItem.active ? { display: "block" } : { display: "none" }}
                                    >
                                    {childrenItem.children.map((childrenSubItem, key) =>
                                <li key={key}>
                                    {(childrenSubItem.type === 'link') ?
                                    <Link to={childrenSubItem.path} className={`${childrenSubItem.active ? 'active' : ''}`} onClick={() => toggletNavActive(childrenSubItem)}>{props.t(childrenSubItem.title)}</Link>
                                    : ''}
                                </li>
                                )}
                            </ul>
                                : ""}
                                </li>
                                )
                                })}
                            </ul>
                            : ''}
                            </li>)}
                            </Fragment>
                            ) */}
                            </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Sidebar;