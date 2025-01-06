export function ConditionalRendering1(){
    const isAuthenticated=true
    // first method
    // if(isAuthenticated){
    //     return(
    //         <div>
    //             loged in...
    //         </div>
    //     )
    // }
    // return(
    //     <div>
    //         not loged in...
    //     </div>
    // )

    return isAuthenticated ?(
        <div>
            loged in.....
        </div>
    ) : (
        <div>
            not loged in.....
        </div>
    )
}

export function ConditionalRendering2(){
    const userStatus = "NOT_VERIFIED"

    switch(userStatus){
        case "VERIFIED":
            return(
                <div>
                    User Verified...
                </div>
            )
        
        case "NOT_VERIFIED":
            return(
                <div>
                    User Not Verified....
                </div>
            )
        
        case "DELETED":
            return(
                <div>
                    User Deleted....
                </div>
            )
        default:
            return(
                <div>
                    Other issue...
                </div>
            )
    }
}