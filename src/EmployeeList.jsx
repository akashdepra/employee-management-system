/**
 * Employee List with search components
 */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header.jsx';
import ServerSideSearchComponent from './components/ServerSideSearchComponent.jsx';
import LocalSearchComponent from './components/LocalSearchComponent.jsx';
import UserLists from './components/UserLists.jsx';
import UserInfo from './components/UserInfo.jsx';

const axios = require('axios');

const EmployeeList = (props) => {
    //Create hook to store search data for local and server side seaerch
    const [searchData, setSearchData] = useState({serverSide: '', local: ''});

    //Create hook for user info to show user details
    const [userInfo, setUserInfo] = useState({show: false, info: {}});

    //Get login user info and employee list form redux
    const userData = useSelector(state => state.userData);
    let employeeData = useSelector(state => state.employeeData);

    //Create hook to store employee data
    const [employeeDataState, setEmployeeData] = useState(employeeData);

    //Redirec to login page if username does not exists
    if (!userData.username) {
        props.history.push({
            pathname: "/"
        })
    }

    //Function called on click of search button for server side serch
    let searchList = (searchValue) => {
        let searchState = searchData;
        searchState.serverSide = searchValue;
        //Get data from server
        getDataFromServer();
        //Set search state
        setSearchData(searchState);
    }

    //Function called on change of local search input field
    let localSearchList = (searchValue) => {
        let searchState = searchData;
        searchState.local = searchValue;
        //Set search state
        setSearchData(searchState);
        //Set filtered employee data
        setEmployeeData(filterData(searchData.local));
    }

    //Function to filter the data based on search value
    let filterData = (searchValue) => {
        let filteredData = employeeData;
        if (searchValue) {
            filteredData = employeeData.filter(user =>{
                console.log('user', user);
                return ( user.first_name.toLowerCase().includes(searchValue.toLowerCase()) || user.last_name.toLowerCase().includes(searchValue.toLowerCase()) )
            });
        }
        return filteredData;
    }

    //Function to get data from server based on search value
    //Fallback for local search in catch
    let getDataFromServer = () => {
        axios.get(`/userData?search=${searchData.serverSide}`)
            .then(function (response) {
                // handle success
                setEmployeeData(response.data);
            })
            .catch(function (error) {
                setEmployeeData(filterData(searchData.serverSide));
            });
    }

    //Function to set user info to show all the details of single user
    let showUser = (user) => {
        setUserInfo({show: true, info: user});
    }

    //Function to reset the user info and show whole employee list
    let goBack = () => {
        setUserInfo({show: false, info: {}});
    }

    return (
            <div className="emp-list">
                <Header userData={userData}>
                </Header>
                {
                    !userInfo.show ?
                        <React.Fragment>
                            <div className="search-elements">
                                <ServerSideSearchComponent searchList={searchList}>

                                </ServerSideSearchComponent>
                                <LocalSearchComponent searchList={localSearchList}>

                                </LocalSearchComponent>
                            </div>
                            <UserLists
                                userList={employeeDataState}
                                searchData={searchData}
                                showUser={showUser}
                            />
                        </React.Fragment>
                    : <UserInfo
                        userInfo={userInfo.info}
                        goBack={goBack}
                    />
                }
            </div>
        );
}

export default EmployeeList;