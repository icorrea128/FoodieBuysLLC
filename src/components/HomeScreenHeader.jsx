import React from 'react';
import HomeScreenHeaderStyles from '../css/HomeScreenHeaderStyles.css';

function HomeScreenHeader(props) {

    const apiRouteFunction = (switchVariable) => {
        switch (switchVariable) {
            case 'Home':
                // code block
                console.log('Home Route');
                break;
            case 'Paleteros':
                console.log('Paleteros Route');
                break;
            case 'Login':
                console.log('Login Route');
                break;
            case 'Login':
                console.log('Logout Route');
                break;
        }

    }

    return (
        <React.Fragment>
            <div className="row HeaderRow">
                <div className="col-md-4 HomePaleteros">
                    <div className="Home">
                        <button className="btn btn-primary"onClick={apiRouteFunction('Home')}> Home</button>
                    </div>
                    <div className="Paleteros">
                        <button className="btn btn-primary" onClick={apiRouteFunction('Paleteros')}>Paleteros</button>
                    </div>
                </div>
                <div className="col-md-4 Paleteros">
                  
                </div>
                <div className="col-md-4 LoginLogout">
                    <div className="Login">
                        <button className="btn btn-primary" onClick={apiRouteFunction('Login')}>Login</button>
                    </div>
                    <div className="Logout">
                        <button className="btn btn-primary" onClick={apiRouteFunction('Logout')}>Logout</button>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default HomeScreenHeader;