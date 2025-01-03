import React from 'react';
import {Link} from 'react-router-dom';
const ContactCard =(props)=>{
    const {id, name, email} = props.contact;
    return(
        <div>
            {/* <Link to={`/contact/${id}`}> */}
            <Link to={{pathname : `/contact/${id}`, state:"dasdsa"}}>
            <div>Name : {name}</div>
            </Link>
            <div>Email :{email}</div>
            <button onClick={()=>{props.clickHandler(id)}}>Delete</button>
        </div>
    )
};


export default ContactCard;