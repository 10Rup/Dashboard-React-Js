import {useContext} from 'react'
import { userContext } from "../utils/context/useUserContext"
import { PostContent } from "./PostContent"
export function PostContainer(){
    const userContextData = useContext(userContext)
    return(
        <div>
            <h6>Post Container</h6>
            <div>{userContextData.username}</div>
            <div>{userContextData.name}</div>
            <div>{userContextData.phone}</div>
            <div>{userContextData.email}</div>
            <PostContent />
        </div>
    )
}