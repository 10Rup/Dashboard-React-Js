import React from 'react';
import ContactCard from "./contactCard";

const ContactList =(props)=>{
    const render_contact_list = props.contacts.map((contact)=>{
        return(

            <ContactCard contact={contact}/>


        )})
    return(
        <div>
            <hr />
            <h1>Contact List</h1>
            <div>{render_contact_list}</div>
        </div>
    )
};

export default ContactList;