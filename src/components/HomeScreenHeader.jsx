import React from 'react';
import HomeScreenHeaderStyles from '../css/HomeScreenHeaderStyles.css';
import { useNavigate } from "react-router-dom";

function HomeScreenHeader(props) {

    let navigate = useNavigate();
    

    const navigation = (urlDestination) => {
        switch (urlDestination){
            case "Home":
                console.log("Home Clicked")
                navigate("/home");
                break;
            case "Login":
                navigate("/login");   
                break;
            case "FoodieBuys":
                navigate("/foodiebuys");
                break;
            case "ContactUs":
                navigate("/contactus");
                break;
            default:
                navigate("/")
                break;
        }
    }

    return (
        <React.Fragment>
            <div className="row HeaderRow">
                <div className="col-md-4 HomePaleteros">
                    <div className="Home">
                        <button className="btn btn-primary" onClick={() => navigation("Home")}> Home</button>
                    </div>
                    <div className="Paleteros">
                        <button className="btn btn-primary" onClick={() => navigation("FoodieBuys")}>Foodie Buys</button>
                    </div>
                </div>
                <div className="col-md-4 Paleteros">
                  
                </div>
                <div className="col-md-4 LoginLogout">
                    <div className="Login">
                        <button className="btn btn-primary" onClick={() => navigation("Login")}>Login</button>
                    </div>
                    <div className="Logout">
                        <button className="btn btn-primary" onClick={() => navigation("ContactUs")}>Contact Us</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default HomeScreenHeader;