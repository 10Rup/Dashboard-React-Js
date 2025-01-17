import {useEffect} from 'react'

export function useDocumentClick() {

    useEffect(() => {
        const handleDocumentClick = () => {
            console.log('You clicked on ducument')
        }
        document.addEventListener('click', handleDocumentClick)

        return () => {
            console.log('unmounting event')
            document.removeEventListener('click', handleDocumentClick)
        }
    })
}