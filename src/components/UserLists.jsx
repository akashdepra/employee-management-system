/**
 * User List Component
 * Displays the employee data in table format with option to see the individual employee details
 */
import React from 'react';

const UserLists = (props) => {
    return (
            <div className="user-list">
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.userList.map(user => {
                            return (
                                <tr key={user.emp_id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.middle_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <div className="user-details-link" onClick={() => {props.showUser(user)}}>
                                        Details
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
}

export default UserLists;