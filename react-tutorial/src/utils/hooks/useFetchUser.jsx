import {useState, useEffect} from 'react'


export function useFetchUser(userId) {

    const userApiUrl = "https://jsonplaceholder.typicode.com/users"

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        setLoading(true);
        const controller = new AbortController();
        
        fetch(`${userApiUrl}/${userId}`,{signal:controller.signal})
        .then((response) => response.json())
        .then((data) => {
            // console.log(loading)
            setUserData(data)
            setError(undefined)
        })
        .catch((err) =>{
            // console.log(err)
            setError(err)
        })
        .finally(() =>{
            setTimeout(() =>{
                setLoading(false)
            },3000)
        })

        return () => {
            controller.abort()
            setTimeout(() =>{
                setLoading(false)
            },3000)
        }
    }, [userId])


    return {user:userData, loading, error}

}