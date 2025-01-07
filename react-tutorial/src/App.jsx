import { UserProfile } from "./components/UserProfile"
import {ConditionalRendering1,ConditionalRendering2} from './components/ConditionalRendering'
import { EventHandling } from "./components/EventHandling"
import { UsingStates1, UsingStates2 } from "./components/UsingStates"


export default function App(){
    return(
        <div>
           <h1>React App</h1> 
           <UserProfile 
           user_name={"Rony"} 
           user_age={55} 
           user_detail={[
            {
                name:"Ram",
                email:"ram@gmail.com"
            }
            ]}/>



            <div>
                <h2>Conditional Rendering</h2>
                <ConditionalRendering1/>
                <ConditionalRendering2/>
            </div>

            <div>
                <h2>Event Handling</h2>
                <EventHandling />
            </div>

            <div>
                <h2>Using State</h2>
                <UsingStates1/>
                <UsingStates2/>
            </div>
        </div>
    )
}