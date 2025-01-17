import {createContext} from 'react'


export const userContext = createContext({
    id:0,
    usename:'default name',
    useremail:'default email',
    displayname:'default',
})