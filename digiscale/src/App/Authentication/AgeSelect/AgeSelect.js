import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
const AgeSelect = (props) => {
    const history = useHistory();

    return (
        <div className="App" >
            <h1 className="hStyle">DigiScale</h1>
            <h2 className="hStyle">Are you over 21 years age</h2>
            <div className="container">
                <p onClick={() => history.push('/Signup')} className="btnChoice">
                    Yes
            </p>
                <p onClick={() => history.push('/Signup')} className="btnChoice">
                    No
                    </p>
            </div>

        </div>

    );
};

export default AgeSelect;
