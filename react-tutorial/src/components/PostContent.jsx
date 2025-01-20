import {useContext} from 'react'
import { userContext } from "../utils/context/useUserContext"
import { PostContentButton } from "./PostContentButton"
export function PostContent(){
    const userData = useContext(userContext)
    return(
        <div>
            <h6>Post Content</h6>
            <label htmlFor="displayname">Display Name : - {userData.displayname}</label>
            <PostContentButton/>
        </div>
    )
}