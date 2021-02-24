/**
 * User Info component
 * Displays detail of individual user with an option to go back to the employee list
 */

import React from 'react';

const UserInfo = (props) => {
    return (
            <div className="user-info">
                <div className="user-field">
                    <label>First Name: </label>
                    <div className="user-data">{props.userInfo.first_name}</div>
                </div>
                <div className="user-field">
                    <label>Middle Name: </label>
                    <div className="user-data">{props.userInfo.middle_name}</div>
                </div>
                <div className="user-field">
                    <label>Last Name: </label>
                    <div className="user-data">{props.userInfo.last_name}</div>
                </div>
                <div className="user-field">
                    <label>Salary: </label>
                    <div className="user-data">{props.userInfo.salary}</div>
                </div>
                <div className="user-field">
                    <label>Employment Type: </label>
                    <div className="user-data">{props.userInfo.employment_type}</div>
                </div>
                <button className="go-back-btton" onClick={props.goBack}>Go Back</button>
            </div>
        );
}

export default UserInfo;