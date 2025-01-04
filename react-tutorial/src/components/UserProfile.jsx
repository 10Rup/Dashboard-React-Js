import { UserDetails } from "./UserDetails"
import { UserProducts } from "./UserProducts"
export function UserProfile(){
    return(
        <div className='user-profile'>
            <div>
                <UserDetails user_detail={{name:"Ram",email:"ram@gmail.com"}} />

                <UserProducts />
            </div>
        </div>
    )
}