import React from 'react';

const ContactCard =(props)=>{
    const {id, name, email} = props.contact;
    return(
        <div>
            <div>Name : {name}</div>
            <div>Email :{email}</div>
            <button onClick={()=>{props.clickHandler(id)}}>Delete</button>
        </div>
    )
};


export default ContactCard;