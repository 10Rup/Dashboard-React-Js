import {useContext} from 'react'
import { userContext } from "../utils/context/useUserContext"


export function PostContentButton(){
    const {id, setUserData} = useContext(userContext)
    
    return(
        <div>

            <h6>Post Content BuStton</h6>
            <button  onClick={() =>{
                setUserData((currentData) => ({...currentData, displayname:'This is displayname'}))
            }
            
            }>Click Here</button>
        </div>
    )
}