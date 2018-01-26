import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const axios = require('axios');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            user_type: ""
        };
        this.change = this.change.bind(this);
    }


    change = e => {
        // this.bind(e);
        // this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };



    onSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/users/', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            user_type: this.state.user_type

        })
            .then(response => {
                console.log(response, 'User added!');
            })
            .catch(err => {
                console.log(err, 'User not added, try again');
            });
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label>First Name</label>
                                <input
                                    name="first_name"
                                    placeholder="First name"
                                    className="form-control"
                                    value={this.state.first_name}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input
                                    name="last_name"
                                    placeholder="Last name"
                                    className="form-control"
                                    value={this.state.last_name}
                                    onChange={e => this.change(e)}
                                />
                            </div>
                        </div>
                    <br />
                    <input
                        name="username"
                        type="email"
                        placeholder="Email"
                        value={this.state.username}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                    />
                    <br />
                    <input
                        name="user_type"
                        placeholder="User Type"
                        value={this.state.user_type}
                        onChange={e => this.change(e)}
                    />
                    <p align="center"><button color="info" onClick={e => this.onSubmit(e)}>Submit</button></p>
                    </div>
                </div>
            </div>
        )
    }
}

