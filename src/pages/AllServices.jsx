import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import ServiceCard from '../components/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
        document.title = "Services || CareerClimb"
    }, [])
    return (
        <div>
            <div className=' text-cyan-900 pt-14'>
                <Heading
                    title={"Professional Career Coaching Services"}
                    subtitle={"Unlock your professional potential with expert career counseling, resume reviews, leadership workshops, and more. Tailored sessions to help you grow, whether online or offline. Start achieving your goals today!"}
                ></Heading>
            </div>
            <div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  px-5 md:px-10 my-10'>
                    {
                        services?.map((service, idx) => <ServiceCard
                            key={idx}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;