import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { toast } from 'react-toastify';
import { InputData, Validate } from '../../components/Form';
import { PageControl } from '../../components/Handler';
import Loading from '../../components/loading/Loading';
import { RootContext } from '../../Context';
toast.configure();

class Register extends Component {
    static contextType = RootContext;

    constructor(props) {
        super(props);

        this.state = {
            isPassShow: false,
            isLoading: false,
            data: {
                name: new InputData(),
                email: new InputData(),
                password: new InputData()
            },
            password: {
                password: new InputData(),
                password_confirmation: new InputData()
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
    }
    
    passwordCheck(data) {
        if(data.password.data === data.password_confirmation.data) {
            return true;
        }else{
            return false;
        }
    }

    handleChange(event) {
        let choice, value;

        if(event.target.name === "password" || event.target.name === "password_confirmation") {
            value = this.state.password;
            choice = "password";
        }else{
            value = this.state.data;
            choice = "data";
        }

        value[event.target.name].data = event.target.value;
        value[event.target.name].error = null;

        this.setState({
            [choice]: value
        }, () => {
            let data = this.state.data;
            let temp = this.state.password;

            if(temp.password.data !== "" && temp.password_confirmation.data !== "" && temp.password.data === temp.password_confirmation.data) {
                data.password.data = temp.password.data;
            }else{
                data.password.data = "";
                data.password.error = null;
            }

            this.setState({
                data: data
            })
        })
    }

    submitRegister() {
        this.setState({
            isLoading: true
        }, async () => {
            const dataForm = new FormData();
            let status;

            dataForm.append("name", this.state.data.name.data);
            dataForm.append("email", this.state.data.email.data);
            dataForm.append("password", this.state.data.password.data);
            dataForm.append("password_confirmation", this.state.data.password.data);

            fetch(this.context.get.global.fetch + "/auth/register", {
                method: 'POST',
                body: dataForm
            })
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then((data) => {
                console.log(data, status);
                if(status === 201) {
                    this.setState({
                        isLoading: false,
                        data: {
                            name: new InputData(),
                            email: new InputData(),
                            password: new InputData()
                        },
                        password: {
                            password: new InputData(),
                            password_confirmation: new InputData()
                        }
                    }, () => {
                        toast.success("Creating Account Success! You can login to your account now!", {
                            position: toast.POSITION.TOP_CENTER
                        });
                    })
                }
                
                /* if(data.status === 200) {
                    localStorage.setItem('token', data.data.token);
                    window.location.reload();
                }else if(data.status === 400) {
                    this.setState({
                        data: ErrorHandler(this.state.data, data.errors),
                        isLoading: false
                    })
                }else if(data.status > 400 && data.status < 600) {
                    this.setState({
                        error: data.message,
                        isLoading: false
                    })
                } */
            });
        })
    }


    render() { 
        return (
            <PageControl type="auth">
                <Container fluid={true} className="p-0">
                    <Loading show={this.state.isLoading} />
                    <div className="row m-0">
                        <div className="col-12 p-0">
                            <div className="login-card">
                                <div className="login-main">
                                    <Form className="theme-form">
                                        <h4 className="text-lg-center">Register Your Account</h4>
                                        <p className="text-lg-center">Enter your personal detail to create account</p>
                                        <FormGroup>
                                            <Label className="col-form-label">Name</Label>
                                            <Input value={this.state.data.name.data} onChange={this.handleChange} name="name" className={"form-control" + (this.state.data.name.error ? " is-invalid" : "")} type="text" placeholder="Enter your name" />
                                            <div className="invalid-feedback">{this.state.data.name.error}</div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="col-form-label">Email Address</Label>
                                            <Input value={this.state.data.email.data} onChange={this.handleChange} name="email" className={"form-control" + (this.state.data.email.error ? " is-invalid" : "")} type="email" placeholder="Enter email address" />
                                            <div className="invalid-feedback">{this.state.data.email.error}</div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="col-form-label">Password</Label>
                                            <Input value={this.state.password.password.data} onChange={this.handleChange} name="password" className={"form-control" + (this.state.data.password.error ? " is-invalid" : "")} type={this.state.isPassShow ? "text" : "password"} placeholder="Enter password"/>
                                            <div className="show-hide" onClick={() => { this.setState({ isPassShow: this.state.isPassShow ? false : true }) }}><span className={this.state.isPassShow ? "" : "show"}></span></div>
                                            <div className="invalid-feedback">{this.state.data.password.error}</div>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label className="col-form-label">Password Confirmation</Label>
                                            <Input value={this.state.password.password_confirmation.data} onChange={this.handleChange} name="password_confirmation" className={"form-control" + (this.passwordCheck(this.state.password) ? "" : " is-invalid")} type={this.state.isPassShow ? "text" : "password"} placeholder="Enter password again"/>
                                            <div className="invalid-feedback">Password doesn't match</div>
                                        </FormGroup>
                                        <div className="form-group mb-0 text-lg-center">
                                            <Button color="primary" className="btn-block" disabled={Validate(this.state.data)} onClick={this.submitRegister}>Sign Up</Button>
                                            <p className="mt-4 mb-0">Already have an account?<Link to="/login" className="ml-1">Login</Link></p>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </PageControl>
        );
    }
}
 
export default Register;