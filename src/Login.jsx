/**
 * Login Screen
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

const axios = require('axios');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    //Function called on click of login button
    loginUser = () => {
        let username = document.getElementById('username').value;
        if (username) {
            axios.get(`http://localhost:8000/Login/authenticate?username=${username}`)
            .then((response) => {
                if (response.status == 200 && response.data.token) {
                    this.props.loginUserData({username, token: response.data.token});

                    axios.get(`http://localhost:8000/EmployeeList/get?token=${response.data.token}`)
                        .then((response) => {
                            if (response.status == 200 && response.data.user_data) {
                                this.props.setEmptData(response.data.user_data);
                                // setEmployeeData(response.data.user_data);
                                //Navigate to the next page of employee list
                                this.props.history.push({
                                    pathname: '/emp-list'
                                })
                            } else {
                                this.props.history.push({
                                    pathname: '/emp-list'
                                })
                            }
                        })
                        .catch((error) => {
                            this.props.history.push({
                                pathname: '/emp-list'
                            })
                        });
                } else {
                    console.log('unable to login');
                }
                // handle success
                // setEmployeeData(response.data);
            })
            .catch((error) => {
                console.log('error', error);
                // setEmployeeData(filterData(searchData.serverSide));
            });
            //Set username in redux
        }
    }

    render() {
        return (
            <div className="app-login">
                <div className="main-login">
                    UserName <input id="username" className="username input" type="text"/>
                    <div className="login-button">
                        <button onClick={this.loginUser}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return {
		loginUserData(data) {
			dispatch({ type: 'LOGINUSER', data })
		},
		setEmptData(data) {
			dispatch({ type: 'SETEMPTDATA', data })
		}
	}
}

export default connect("", mapDispatchToProps)(Login)