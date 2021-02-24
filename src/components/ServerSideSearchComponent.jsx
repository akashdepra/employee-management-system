/**
 * Server side search component
 * Consists of an input and search button which calls the function searchList from parent component
 */
import React from 'react';

const ServerSideSearchComponent = (props) => {

    return (
            <div className="server-side-search">
                <div style={{display: 'inline', float: 'left', width: '100px'}}>
                    <label style={{float: 'left'}}>
                        Name
                    </label>
                </div>
                <div style={{display: 'inline'}}>
                    <input id="server-side-search-input" className="server-side-search-input" type="text"/>
                    <button className="search-button" onClick={() => {
                        props.searchList(document.getElementById("server-side-search-input").value)
                    }}>Search</button>
                </div>
            </div>
        );
}

export default ServerSideSearchComponent;