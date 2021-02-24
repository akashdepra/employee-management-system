/**
 * Local search component
 * Consists of an input which calls the function searchList from parent component whenever
 * the text in input field is changes
 */
import React from 'react';

const LocalSearchComponent = (props) => {

    return (
            <div className="local-search">
                <div style={{display: 'inline', float: 'left', width: '100px'}}>
                    <label style={{float: 'left'}}>
                        Local Search
                    </label>
                </div>
                <div style={{display: 'inline'}}>
                    <input
                        id="local-search-input"
                        className="local-search-input"
                        type="text"
                        onChange={() => {
                            props.searchList(document.getElementById("local-search-input").value)
                        }}
                    />
                </div>
            </div>
        );
}

export default LocalSearchComponent;