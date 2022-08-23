import React from 'react';
import HomeScreenHeaderStyles from '../css/HomeScreenHeaderStyles.css';
import { useNavigate } from "react-router-dom";

function HomeScreenHeader(props) {

    let navigate = useNavigate();
    
    const homeNavigation = () => {
        navigate("/home");
    }
    const loginNavigation = () => {
        navigate("/login");
    }

    return (
        <React.Fragment>
            <div className="row HeaderRow">
                <div className="col-md-4 HomePaleteros">
                    <div className="Home">
                        <button className="btn btn-primary" onClick={homeNavigation}> Home</button>
                    </div>
                    <div className="Paleteros">
                        <button className="btn btn-primary" >Foodie Buys</button>
                    </div>
                </div>
                <div className="col-md-4 Paleteros">
                  
                </div>
                <div className="col-md-4 LoginLogout">
                    <div className="Login">
                        <button className="btn btn-primary" onClick={loginNavigation}>Login</button>
                    </div>
                    <div className="Logout">
                        <button className="btn btn-primary" >Logout</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default HomeScreenHeader;