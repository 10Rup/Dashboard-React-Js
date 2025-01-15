import {useState} from 'react'


export function UsingPostApi() {
    const [postData, setPostData] = useState({
        title:"",
        body:"",
    })

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()

                const newPost = {
                    userId:1,
                    title:postData.title,
                    body:postData.body
                }

                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method:"POST",
                    body: JSON.stringify(newPost),
                    headers:{
                        "Content-type":"application/json; charset=UTF-8",
                    }
                }).then((rensponse)=>{
                    return rensponse.json()
                }).then((data)=>{
                    console.log("Success")
                    console.log(data)
                }).catch((err)=>{
                    console.log(err)
                })
            }}>

            <label htmlFor="title">Title - </label>
            <input type="text" id='title' value={postData.title}
            onChange={(e)=>{
                setPostData((currentData)=>{
                    return {...currentData, title:e.target.value}
                })
            }} /> <br />

            <label htmlFor="body">Body - </label>
            <input type="text" id='body' value={postData.body}
            onChange={(e)=>{
                setPostData((currentData)=>{
                    return {...currentData, body:e.target.value}
                })
            }}/> <br />

            <button>Create Posts</button>




            </form>
        </div>
    )


}