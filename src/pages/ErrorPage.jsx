import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorImage from '../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>

            <section>
                <div className="hero bg-base-200 min-h-[calc(100vh-292px)]">
                    <div className="hero-content gap-16 flex-col lg:flex-row">
                        {/* <img
                            src={ErrorImage}
                            className=" w-full" /> */}
                        <h1 className='text-9xl font-bold text-cyan-500'>404</h1>
                        <div className='space-y-5 text-cyan-800'>
                            <h1 className="text-7xl font-bold">Oops!</h1>
                            <h3 className="text-5xl font-bold">Page is Not Found</h3>
                            <Link to='/' className="btn bg-cyan-800 text-white">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#141414] mx-auto'>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default ErrorPage;