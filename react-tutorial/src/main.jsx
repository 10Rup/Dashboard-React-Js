import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

// setting routes
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


// Pages
import { UserDashBoard } from './pages/UserDashboard';
import { ChildPage } from './pages/ChildPage';
import { PostPage } from './pages/PostPage';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/users',
    element: <UserDashBoard />
  },
  {
    path:'/com',
    element: <UserDashBoard />,
    children:[
      {
        path:'Child-Pages',
        element: <ChildPage />
      },
      {
        path:'Post-Pages',
        element: <PostPage />
      } 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
