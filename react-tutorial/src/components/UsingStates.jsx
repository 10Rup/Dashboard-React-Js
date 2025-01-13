import {useState} from 'react'


export function UsingStates1(){
    // de-structing useStatte() whose first item is default value and next is a fucntion
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
    const [displayname, setDisplayname] = useState("")

    const isDisabled = !username ||  !password
    return(
        <div>First Method <br />
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <div>
                    <label htmlFor="user-name">UserName - </label>
                    <input type="text" name='user-name'
                    value={username} 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="pass-word">Password - </label>
                    <input type="password" name="pass-word"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    
                    />
                </div>
                <div>
                    <label htmlFor="display-name">DisplayName - </label>
                    <input type="text" name="display-name" defaultValue={username}/>
                </div>
                <button disabled={isDisabled}>Sign In</button>
            </form>
        </div>
    )
}

export function UsingStates2(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        displayname:'',
    })
    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <div> Second Method <br />
                    <label htmlFor="username">UserName - </label>
                    <input type="text" id="username" name='username'
                    value={formData.username} 
                    onChange={(e) =>{
                        
                        setFormData((currentState) =>
                            ({currentState, username :e.target.value})
                        )
                    }}/>
                </div>
                
                <div>
                    <label htmlFor="pass-word">Password - </label>
                    <input type="password" id="password" name="pass-word"
                    value={formData.password} 
                    onChange={(e) =>{
                        setFormData((currentState)=>({...currentState, password:e.target.value}))
                    }}
                    />
                </div>
            </form>
        </div>

    )
}