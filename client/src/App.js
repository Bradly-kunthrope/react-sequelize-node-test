import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      user_type: ""
    };
    // this.handleFirstName = this.handleFirstName.bind(this);
    // this.handleLastName = this.handleLastName.bind(this);
    // this.handleEmail = this.handleEmail.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
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
    // this.props.onSubmit(this.state);
    // api.createUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    // this.setState({
    //     first_name: e.target.value,
    //     last_name: e.target.value,
    //     email: e.target.value,
    //     password: e.target.value
    // });
    // console.log(this.state);
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
    // this.props.onChange({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     password: ""
    // });


  };
  render() {
    return (
      <div className="container">
            <input
              name="first_name"
              placeholder="First name"
              value={this.state.first_name}
              onChange={e => this.change(e)}
            />
          <br />
            <input
              name="last_name"
              placeholder="Last name"
              value={this.state.last_name}
              onChange={e => this.change(e)}
            />
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
            <input
              name="user_type"
              placeholder="User Type"
              value={this.state.user_type}
              onChange={e => this.change(e)}
            />
          <br />
          <p align="center"><button color="info" onClick={e => this.onSubmit(e)}>Submit</button></p>
      </div>
    )
  }
}

