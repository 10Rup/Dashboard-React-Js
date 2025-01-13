import PropTypes from 'prop-types'
import {useState} from 'react'
export function UseStateArray({user_data,setUsers }){
    
    const {id,email,name} = user_data
    const [isEditing, setIsEditing] =useState(false)
    const [username, setUsername] = useState(name)
    const [usermail, setUsermail] = useState(email)
    return(
            
        <div>
            {/* <label htmlFor="username">Name : </label>
            <input type="text" name="username"  /> */}
            <button onClick={
                ()=>{
                    setIsEditing((currentState)=> !currentState)
                }
            }>Edit</button> 
            <button>Delete</button>
            {isEditing &&
            (<button onClick={
                ()=>{
                    setUsers((currentUsersState)=>{
                        return (currentUsersState.map((currentUser)=>{
                            if(currentUser.id===id){
                                return {...currentUser, name:username, email:usermail}
                            }
                            else return currentUser
                        }
                            ))
                        }
                    )
                    setIsEditing(false)
                }
            }>Save Method-1</button>)}
            {isEditing &&
            (<button onClick={
                ()=>{
                    setUsers((currentUsersState)=>{
                        return (currentUsersState.map((currentUser)=>
                            currentUser.id === id ? {...currentUser, name:username, email:usermail} : currentUser
                        ))
                        }
                    )
                    setIsEditing(false)
                }
            }>Save Method-2</button>)}
            <h3>User - {id}</h3>
            <b>User Name : </b>{isEditing ? <input name="username" id="username" value={username} onChange={
                (e)=>{
                    setUsername(e.target.value)
                }
            }/> : <span>{name}</span>}<br />
            <b>User Email : </b>{isEditing ? <input name="emial" id='email' value={usermail} onChange={
                (e) =>{
                    setUsermail(e.target.value)
                }
            }/> : <span>{email}</span>}<br />
            <br />
        </div>
)
}

UseStateArray.propTypes = {
    user_data:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        email:PropTypes.string
    }).isRequired,
    setUsers:PropTypes.func.isRequired,
}