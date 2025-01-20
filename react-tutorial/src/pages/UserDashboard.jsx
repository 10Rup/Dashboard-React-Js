import { Outlet, Link  } from "react-router-dom"

export function UserDashBoard() {
    return (
        <div>
            <div>
                 <h1>User Dashboard</h1>
                  <p>A parent page.</p>

                  <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link>Users</Link>
                    </li>
                    <li>
                        <Link to={'/com/Child-Pages'}>Child-Page</Link>
                    </li>
                    <li>
                        <Link to={'/com/Post-Pages'}>Posts</Link>
                    </li>
                  </ul>
            </div>
        <Outlet />
        </div>
        
    )
}