export function EventHandling(){
    return(
        <div>
        <form 
            onSubmit={(e)=>{
                e.preventDefault()

                console.log(e.target)
                const formData = new FormData(e.target)
                console.log(formData)
                console.log(`User Name - ${formData.get("user-name")}`)
            }}
        >

            <label htmlFor="user-name">User Name:</label>
            <input type="text" id="user-name" name="user-name" 
            onChange={(e)=>{
                console.log(e.target.value)
            }}
            /><br />

            <label htmlFor="pass-word">Password:</label>
            <input type="password" id="pass-word" name="pass-word" /> <br />

            <button>Login</button>
        </form>
        </div>
    )
    
}