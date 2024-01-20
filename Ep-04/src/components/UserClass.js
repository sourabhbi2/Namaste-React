import React from "react";


//class based component needs class before the file name then extends keyword and React.Component.

class UserClass  extends React.Component{

        constructor(props){
            super(props);

        }

        render(){
            const {name, location, contact} = this.props;

            return(
                <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact us: {contact}</h4>
                </div>
            )
        }
};

export default UserClass;