import React from "react";
import { Link } from "react-router-dom";

const ContactDetails= (props)=>{
    // const location = useLocation();
    // const { state } = location;
    // console.log(state)

    return(
        <div><Link to="/">BACK</Link>
            <div>Name :{"runy"}</div>
            <div>Email :{"dasdsfsf"}</div>
            

        </div>
    )
}

export default ContactDetails;