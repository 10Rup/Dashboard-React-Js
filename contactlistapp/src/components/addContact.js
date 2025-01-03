import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
// class AddContact extends React.Component {
//     state={
//         name:'',
//         email:''
//     };

//     add =(e)=>{
//         e.preventDefault();
        
//         if(this.state.name === "" || this.state.email ===""){
//             alert('missing data')
//             return;
//         }
//         this.props.addContactHandler(this.state)
//         // console.log(this.state)
//         this.setState({name:"", email:""});
        
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Add Contact</h2>
//                 <form onSubmit={this.add}>
//                     <div>
//                         <label>Name</label>
//                         <input type="text" name='name' placeholder='Contact Name'
//                         value={this.state.name}
//                         onChange={(e)=>{
//                             this.setState({name:e.target.value})
//                         }}/>
//                     </div>
//                     <div>
//                         <label>Email</label>
//                         <input type="text" name='email' placeholder='Contact Email'
//                         value={this.state.email}
//                         onChange={(e)=>{
//                             this.setState({email:e.target.value})
//                         }}/>
//                     </div>
//                     <button>ADD</button>
//                 </form>
//             </div>
//         )
//     }
// };



const AddContact=(props)=>{
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const add =(e)=>{
        e.preventDefault();
        
        if(name === "" || email ===""){
            alert('missing data')
            return;
        }
        props.addContactHandler({name, email})
        // console.log(this.state)
        setName('')
        setEmail('')
        navigate('/')
        
    }

    return(
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={add}>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' placeholder='Contact Name'
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' placeholder='Contact Email'
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <button>ADD</button>
            </form>
        </div>
    )
};
export default AddContact;