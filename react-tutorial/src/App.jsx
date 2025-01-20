import {useState, useEffect} from 'react'
import { UserProfile } from "./components/UserProfile"
import {ConditionalRendering1,ConditionalRendering2} from './components/ConditionalRendering'
import { EventHandling } from "./components/EventHandling"
import { UsingStates1, UsingStates2 } from "./components/UsingStates"
import { UseStateArray } from "./components/UseStateArray"
import { UsingPostApi } from './components/UsingPostApi'
import { UsingCustomHook } from './components/UsingCustomHook'

import { userContext } from './utils/context/useUserContext'
import { PostContainer } from './components/PostContainer'

import { useFetchUser } from './utils/hooks/useFetchUser.jsx'


export default function App(){

    const [user_data_new, setUser_Data_New] = useState({user:'default'})
    const {user, loading, error} = useFetchUser(6);
    // console.log(user,loading,error)

    // console.log(loading)
    useEffect(() =>{
        if(!loading && !error && user ){
            setUser_Data_New(user)
            console.log("updating data")
        }
    }, [loading,error, user])
    console.log(loading)
    console.log( user_data_new )


    // For adding New Users
    const [UserName, setUserName]= useState("")
    const [UserMail, setUserMail]= useState("")
    const [counter, setCounter] = useState(5)


    // For using Custom Hooks
    const [toggle, setToggle]=useState(false)
    const [usersData, setUserData] = useState([
        {
            id:1,
            name:'user-1',
            email:"ram@gamil.com"
        },
        {
            id:2,
            name:"user3",
            email:'rony@gmail.com'
        },
        {
            id:3,
            name:'user-3',
            email:"ram@gamil.com"
        },
        {
            id:4,
            name:"user-4",
            email:'rony@gmail.com'
        },
    ])


    // using useEffect
    useEffect(()=>{
        // console.log('useEffect is called')
        // document.title = "React - "+ counter
    }, [counter])

    // method-1
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users", {
    //         method: 'GET',
    //     }).then((response)=>{
    //         return response.json()
    //     }).then((data)=>{
    //         console.log(data)
    //     })
    // })

    // method-2
    useEffect(()=>{
        async function fetchUsers(){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users",{
                    method:'GET'
                })
                const jsonData = await response.json()
                // console.log(jsonData)
            } catch (err) {
                // console.log("having error - "+err)
            }
            
        }

        fetchUsers()
    })


    // For useContext
    const [ userContextData , setUserconstextData] = useState({
        id:1,
        username:'user-1',
        useremail:'user-mail',
        displayname:'user name'
    })

    return(
        <div>
           <h1>React App</h1> 
           <UserProfile 
           user_name={"Rony"} 
           user_age={55} 
           user_detail={[
            {
                name:"Ram",
                email:"ram@gmail.com"
            }
            ]}/>



            <div>
                <h2>Conditional Rendering</h2>
                <ConditionalRendering1/>
                <ConditionalRendering2/>
            </div>

            <div>
                <h2>Event Handling</h2>
                <EventHandling />
            </div>

            <div>
                <h2>Using State</h2>
                <UsingStates1/>
                <UsingStates2/>
            </div>

            <div>
                <h2>Using States with Array</h2>
                <h3>Add New User</h3>
            <form onSubmit={(e)=>{
                e.preventDefault()
                const newUser = {
                    id: counter,
                    name:UserName,
                    email:UserMail
                }
                setCounter((currentCounter)=> currentCounter+1)
                setUserData((currentUserState) => [...currentUserState, newUser])

            }}>
                <div>
                    <label htmlFor="UserName">UserName - </label>
                    <input type="text" name="UserName" id="UserName" 
                    value={UserName}
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}/><br />


                    <label htmlFor="UserMail">User Mail - </label>
                    <input type="text" id="UserMail" name="UserMail" value={UserMail}
                    onChange={(e)=>{
                        setUserMail(e.target.value)
                    }}/><br />
                </div>
                <button>Add User</button><br /><br />




            </form>
                {usersData.map((user)=> <UseStateArray key={user.id} user_data={user} setUsers={setUserData}/>)}
            </div>

            <div>
             <h1>Using React Hook <u>useEffect</u></h1>
             <button onClick={()=>{
                setCounter((count)=> count+1)
             }}>Click</button>
             <p>Here useEffect will only called when we click the button</p>
            </div>
            


            <div>
                <h1>Fetching data from APIs</h1>


            </div>

             <div>
                <h1>Using POST</h1>
                <UsingPostApi/>

             </div>

             <div>
                <h1>Using Custom Hook</h1>
                <button onClick={()=>{
                    setToggle((currentState)=> !currentState)
                }
                }>Toggle Hook</button>
                {/* uncomment  the below code to see effect */}
                {/* {toggle && <UsingCustomHook/>} */}
                
             </div>

            <div>
                <h1>Using useContext</h1>
                <p>the use of this useContext is that instead of sending different parameters inside props, we will declare a new name function that will have all the required variablse/parameters inside it with their default values.</p>
            
                <userContext.Provider 
            value={{ ...user_data_new, setUserData: setUserconstextData}}>

                    
                    {/* <PostContainer/> */}
                    <>{loading ? <h1>loading.......</h1> :<PostContainer/>}</>
                </userContext.Provider>
            
            
            
            
            </div>
        </div>
    )
}