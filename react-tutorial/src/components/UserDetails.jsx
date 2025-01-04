export function UserDetails(props){
    const {name, email} = props.user_detail
    return(
        <div className="user-details">
            <span>Name : {name}</span><br/>
            <span>Email : {email}</span>
        </div>
    )
}