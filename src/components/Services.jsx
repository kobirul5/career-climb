import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-10'>
            <section className='flex flex-col text-center justify-center items-center '>
                    <h1 className=" text-3xl md:text-5xl font-bold md:w-[80%]">Professional Career Coaching Services</h1>
                    <p className="py-6 md:w-[80%]">Unlock your professional potential with expert career counseling, resume reviews, leadership workshops, and more. Tailored sessions to help you grow, whether online or offline. Start achieving your goals today!
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                        {
                            services?.slice(0,6).map((service, idx)=> <ServiceCard
                            key={idx}
                            service = { service}
                            ></ServiceCard>)
                        }
                    </div>
                    <div className='mt-10'>
                        <Link to="/allServices" className='btn bg-cyan-500 text-white'>Show All Services</Link>
                    </div>
            </section>
        </div>
    );
};

export default Services;