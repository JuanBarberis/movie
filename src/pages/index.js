import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import IndexLayout from '../layouts/IndexLayout'
import Movie from '../components/Movie'
import Contact from '../components/Contact'
import MainLayout from '../layouts/MainLayout'

export const router = createBrowserRouter([
    {
        path: '/', element: <IndexLayout />,
        children:
            [
                { path: '/home', element: <Home /> },
                { path: '/login', element: <Login /> },
            ]
    },
    {
        path: '/', element: <MainLayout />,
        children:
            [
                { path: '/movie', element: <Movie /> },
                { path: '/contact', element: <Contact /> },

            ]
    }
])

