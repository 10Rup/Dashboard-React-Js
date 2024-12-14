import React, {useState, useEffect} from 'react';
import Header from "./header"
import AddContact from "./addContact"
import ContactList from "./contactList"

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
  const add_ContactHandler =(contact)=>{
    // console.log(contact)
    setcontact_list([...contact_list, contact])

  }

  useEffect(()=>{
    const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveData) {
      setcontact_list(retriveData)
    }
  },[]);


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact_list))
  },[contact_list]);

  return (
    <div className="App">
      <div>
        <h1>Hello!</h1>
        <Header />
        <AddContact addContactHandler={add_ContactHandler}/>
        <ContactList contacts={contact_list}/>
      </div>
    </div>
  );
}

export default App;
