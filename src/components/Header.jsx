/**
 * Header component
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div className="main-header">
                <div className="ems-title">
                    Employee Management
                </div>
                <div className="welcome-title">
                    Welcome {this.props.userData.username}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
	return {
		loginUserData(data) {
			dispatch({ type: 'LOGINUSER', data })
		}
	}
}

export default connect("", mapDispatchToProps)(Header)
