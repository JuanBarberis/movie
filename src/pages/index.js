import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import IndexLayouts from '../layouts/IndexLayouts'

export const router = createBrowserRouter([
    {
        path: '/', element: <IndexLayouts />,
        children:
            [
                { path: '/', element: <Login /> },
                { path: '/home', element: <Home /> },
            ]
    }


])

