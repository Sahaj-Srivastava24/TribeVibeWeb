import React from 'react';
// import homepagecss from './homepage.css'; 
import Nav from './navBar';
import GetStarted from './getStarted';

const homePage =(props)=>{
    return(
        <div className="homepage">
            <Nav/>
            <div className="gs">
                <GetStarted/>
            </div>
        </div>
    );
}

export default homePage;