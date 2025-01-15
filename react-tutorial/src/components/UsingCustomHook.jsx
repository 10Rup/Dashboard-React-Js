import {useEffect} from 'react'



export function UsingCustomHook(){

    useEffect(() => {
        const resizeHookEffect = (e)=>{
            console.log("Window resized")
        }
        window.addEventListener("resize", resizeHookEffect)

        return () => {
            console.log("event unmounted")
            console.log("Removing event")
            window.removeEventListener("resize", resizeHookEffect)
        }

    }, [])

    return(
        <div>
            <h1>Event On</h1>
        </div>
    )
}