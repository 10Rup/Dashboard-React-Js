import {createContext} from 'react'


export const userContext = createContext({
    id:0,
    username:'default name',
    useremail:'default email',
    displayname:'default',
    setUserData: ()=> {},

    user_name:'',
    name:'',
    email:'',
    phone:'',
})