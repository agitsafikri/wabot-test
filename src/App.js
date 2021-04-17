import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RootContext } from './Context';
import Login from './others/auth/Login';
import Register from './others/auth/Register';
import Page from './pages/Page';

const Provider = RootContext.Provider;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            global: {
                fetch: "http://103.226.138.21/api"
            },
            user: {
                id: null,
                name: "",
                email: ""
            }
        }

        this.setValue = this.setValue.bind(this);
    }

    setValue(target, data) {
        this.setState({
            [target]: data
        })
    }

    render() { 
        return (
            <Provider value={{ get: this.state, set: this.setValue }}>
                <BrowserRouter>
                    <Switch>                        
                        <Route path="/login" exact render={(props) => <Login {...props} />} />
                        <Route path="/register" exact render={(props) => <Register {...props} />} />

                        <Route path="/" exact render={(props) => <Page {...props} />} />
                        
                        <Route path="/user" exact render={(props) => <Page name="user" {...props} />} />

                        <Route path="/contact/group" exact render={(props) => <Page name="contact/group" {...props} />} />
                        <Route path="/contact" exact render={(props) => <Page name="contact" {...props} />} />

                        <Route path="/settings" exact render={(props) => <Page name="settings" {...props} />} />

                        <Route path="/" render={(props) => <Page {...props} />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
 
export default App;