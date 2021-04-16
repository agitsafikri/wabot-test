import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { InputData } from '../../components/Form';
import { PageControl } from '../../components/Handler';
import Loading from '../../components/loading/Loading';
import { RootContext } from '../../Context';

class Login extends Component {
    static contextType = RootContext;

    constructor(props) {
        super(props);

        this.state = {
            isPassShow: false,
            isLoading: false,
            data: {
                email: new InputData(),
                password: new InputData()
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    fetchNow() {
        fetch(this.context.get.global.fetch + "/auth/user-profile", {
                method: 'GET',
                headers: {
                    Authorization: ("Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMDMuMjI2LjEzOC4yMVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxODI5MTY3MSwiZXhwIjoxNjE4Mjk1MjcxLCJuYmYiOjE2MTgyOTE2NzEsImp0aSI6Im1mZ1VpMGhEZ3BrVkRqUG8iLCJzdWIiOjMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.kOZsOEj81tcObcuNsTtY0yTJYXXVNRqAauWgIQWx9UA")
                }
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            });
    }

    handleChange(event) {
        let value = this.state.data;

        value[event.target.name].data = event.target.value;

        this.setState({
            data: value
        })
    }

    submitLogin() {
        this.setState({
            isLoading: true
        }, async () => {
            const dataForm = new FormData();

            let datam = "";

            dataForm.append("email", this.state.data.email.data);
            dataForm.append("password", this.state.data.password.data);

            fetch(this.context.get.global.fetch + "/auth/login", {
                method: 'POST',
                body: dataForm
            })
            .then(response => {
                datam = response.status;
                return response.json()
            })
            .then((data) => {
                localStorage.setItem('token', data.access_token);
                console.log(datam);
                console.log(data);
                window.location.reload();
            });
        })
    }

    componentDidMount() {
        this.fetchNow();
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
                                        <h4 className="text-lg-center">Sign In to Whatsapp Bot</h4>
                                        <p className="text-lg-center">Use Your Account's Credential</p>
                                        <FormGroup>
                                            <Label className="col-form-label">Email Address</Label>
                                            <Input  name="email" value={this.state.data.email.data} onChange={this.handleChange} className="form-control" type="email" placeholder="Enter email address" />
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Label className="col-form-label">Password</Label>
                                            <Input name="password" value={this.state.data.password.data} onChange={this.handleChange} className="form-control" type={this.state.isPassShow ? "text" : "password"} placeholder="Enter password"/>
                                            <div className="show-hide" onClick={() => { this.setState({ isPassShow: this.state.isPassShow ? false : true }) }}><span className={this.state.isPassShow ? "" : "show"}></span></div>
                                        </FormGroup>
                                        <div className="form-group mb-0 text-lg-center">
                                            <Button color="primary" className="btn-block" onClick={this.submitLogin}>Sign In</Button>
                                            <p className="mt-4 mb-0">Don't have account?<Link to="/register" className="ml-1">Register</Link></p>
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
 
export default Login;