import React, {useState, useEffect} from 'react';
import { v4 } from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./header"
import AddContact from "./addContact"
import ContactList from "./contactList"
import ContactDetails from './contactDetails';
import api from '../api/contacts';

function App() {

  // const contact_list =[
  //   {
  //     id:'1',
  //     name:'user_1',
  //     email:'user1@gmail.com'
  //   },
  //   {
  //     id:'2',
  //     name:'test',
  //     email:'test@gmail.com'
  //   },
  // ];
  const LOCAL_STORAGE_KEY="contactDetails";
  const [contact_list, setcontact_list] = useState([]);
  const [searchTerm, setsearchTerm] = useState("") 
  const [searchResults, setsearchResults] = useState([])

  const add_ContactHandler = async (contact)=>{
    // console.log(contact)
    const request= {
      id: v4(),
      ...contact,
    }
    const response = await api.post("/contacts", request)
    setcontact_list([...contact_list, response.data])
    // setcontact_list([...contact_list, {id: v4(), ...contact}])

  };

  const retrieveContactData = async ()=>{
    const response = await api.get("/contacts")
    return response.data
  }


  const removeContacts = async (id)=>{
    await api.delete(`/contacts/${id}`)
    const newContactList = contact_list.filter((contact)=>{
      return contact.id !== id
    })
    setcontact_list(newContactList)

  }
  
  const searchHandler=(searchValue)=>{
    setsearchTerm(searchValue)
    // console.log(searchValue)
    if(searchValue !==""){
      const newContactList = contact_list.filter((contact)=>{
        return Object.values(contact.name).join("").toLowerCase().includes(searchValue.toLowerCase())
      })
      setsearchResults(newContactList)
    }
    else {
      setsearchResults(contact_list)
    }
    
    
  }


  useEffect(()=>{
    // const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if(retriveData) {
      // setcontact_list(retriveData)
    // }
    const getallContacts = async ()=>{
      const allContacts = await retrieveContactData();
      if(allContacts){ setcontact_list(allContacts)}
    }
    getallContacts();

  },[]);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact_list))
  },[contact_list]);

  return (
    <div className="App">
      <div>
        <h1>Hello!</h1>
        
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact 
            element={<ContactList 
            contacts={searchTerm.length < 1 ?contact_list : searchResults} 
            removeContactData={removeContacts}
            findTerm={searchTerm} searchKeyWord={searchHandler}
            />} />
            <Route path="/add"
            element={<AddContact addContactHandler={add_ContactHandler} /> } />   
            <Route path="/contact/:id" element= {<ContactDetails />}/>
          </Routes>
           
        </Router>
      </div>
    </div>
  );
}

export default App;
