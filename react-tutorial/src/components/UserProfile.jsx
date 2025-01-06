import PropTypes from "prop-types"
import { UserDetails } from "./UserDetails"
import { UserProducts } from "./UserProducts"
export function UserProfile(props){
    return(
        <div className='user-profile'>
            <h1>User Name - {props.user_name}</h1>
            <h1>User Age - {props.user_age}</h1>
            <div>
                <UserDetails user_detail={{name:"Ram",email:"ram@gmail.com"}} />

                <UserProducts />
            </div>
        </div>
    )
}

UserProfile.propTypes={
    user_name:PropTypes.string.isRequired,
    user_age:PropTypes.number,
    user_detail:PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired
        })
    )
}