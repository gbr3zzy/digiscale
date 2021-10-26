import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
const Signup = (props) => {
    const history = useHistory();

    return (
        <div className="App" >
            <h1 className="hStyle">DigiScale</h1>
            <h2 className="hStyle">Are you over 21 years age</h2>
            <div className="container">
                <form >
                    <div className="inputWrap">
                        <input type="text" placeholder="First and Last Name" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="License/ID Number" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="SSN/EIN" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="Address" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="State" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="City/Country" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="Zip Code" name="name" />
                    </div>
                    <div className="inputWrap">
                        <input type="text" placeholder="Email Address" name="name" />
                    </div>

                </form>
                <p className="btnSignUp " onClick={() => history.push('/Dashboard')}>Sign Up</p>
                <p className="btnSignUp btnText" onClick={() => history.push('/Dashboard')}>Skip </p>


            </div>

        </div>

    );
}

export default Signup;
