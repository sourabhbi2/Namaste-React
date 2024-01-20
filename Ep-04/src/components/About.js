import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is food app.</h2>
            <User 
            name= {"Sourabh Kumar (functional component)"}
            location={'Patna functional'}
            contact={'sourabh@gmail.com ()'}
              />
            <UserClass 
            name={'Sourabh Kumar (class component)'} 
            location={'Patna classs'} 
            contact={'sourabh@gmail.com class'}
            />
        </div>
    )
};

export default About;