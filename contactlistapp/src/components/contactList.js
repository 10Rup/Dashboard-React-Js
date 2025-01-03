import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from "./contactCard";

const ContactList =(props)=>{
    const inputEl = useRef("")

    // console.log(props)

    const deleteContactHandeler = (id)=>{
        props.removeContactData(id)
    }
    const render_contact_list = props.contacts.map((contact)=>{
        return(

            <ContactCard contact={contact} clickHandler={deleteContactHandeler} key={contact.id}/>


        )})


    const getSearchTerm = ()=>{
        // console.log(inputEl.current.value)
        props.searchKeyWord(inputEl.current.value)

    }
    return(
        <div>
            <hr />
            <h1>Contact List</h1>
            <div className="ui search">
                <div className='ui icon input'>
                    <input 
                    ref={inputEl}
                    type='text' 
                    placeholder='Search Contacts' 
                    className='prompt' value={props.findTerm} onChange={getSearchTerm}
                    />

                </div>

            </div>


                <Link to="/add">
                    <button>Add New Contact</button>
                </Link>
            <div>{render_contact_list.length > 0 ? render_contact_list : "No contact found" }</div>
        </div>
    )
};

export default ContactList;