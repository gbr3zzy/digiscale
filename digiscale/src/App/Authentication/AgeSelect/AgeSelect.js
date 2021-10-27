import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const AgeSelect = (props) => {
    const history = useHistory();

    return (
        // <div className="container">
        <div className="mainContainer App" >
            <h1 className="hStyle">DigiScale</h1>
            <h2 className="hStyle">Are you over 21 years age</h2>
            <div className="mainContainer">
                <p onClick={() => history.push('/Signup')} className="btnChoice">
                    Yes
            </p>
                <p onClick={() => history.push('/Signup')} className="btnChoice">
                    No
                    </p>
            </div>

        </div>
        // </div>
    );
};

export default AgeSelect;
