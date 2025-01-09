import PropTypes from 'prop-types'
export function UseStateArray(props){

    const {id,email,name} = props.user_data
    return(
            
        <div>
            {/* <label htmlFor="username">Name : </label>
            <input type="text" name="username"  /> */}
            <h3>User - {id}</h3>
            <b>User Name : </b><span>{name}</span><br />
            <b>User Email : </b><span>{email}</span><br />
            <br />
        </div>
)
}

UseStateArray.propTypes = {
    user_data:PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        email:PropTypes.string
    })
}