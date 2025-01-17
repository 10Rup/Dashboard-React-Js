import {useEffect} from 'react'
import {useDocumentClick} from '../utils/hooks/useDocumentClick'


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

    useDocumentClick()
    return(
        <div>
            <h1>Event On</h1>
        </div>
    )
}