import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../components/Profile';
import Services from '../components/Services';
import ServiceDetails from '../pages/ServiceDetails';
import PrivateRoute from '../pages/PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import SuccessStory from '../components/SuccessStory';
import AllBlogs from '../pages/AllBlogs';
import AllServices from '../pages/AllServices';
import ProfilePrivate from '../privateRoute/ProfilePrivate';
import ForgetPassword from '../pages/ForgetPassword';
import FullBlog from '../pages/FullBlog';
import BlogPrivate from '../privateRoute/BlogPrivate';
import About from '../pages/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Services></Services>,
                        // loader: () => fetch('./service.json')
                    },
                ]
            }, 
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path:'/blogs',
                element:<AllBlogs></AllBlogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/forgetPassword",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <ProfilePrivate><Profile></Profile></ProfilePrivate>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute>
                             <ServiceDetails></ServiceDetails>
                            </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/service.json')
                    const data = await res.json()
                    const singleData = data.find((d) => d.id == params.id)
                    return singleData
                }
            },
            {
                path:'/fullBlog/:id',
                element: <BlogPrivate> <FullBlog></FullBlog></BlogPrivate>,
                loader:async ({params}) => {
                    const res = await fetch('/fullBlogs.json')
                    const data = await res.json()
                    const singleBlog= data?.find((d)=> d?.id == params.id)
                    return singleBlog
                }
            },
            {
                path: "/aboutUs",
                element: <About></About>
            }
        ]
    }
])
export default router;