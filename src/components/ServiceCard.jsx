import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ServiceCard = ({service}) => {
    const {id,serviceName, category, pricing,counselor, image, duration} = service
    const navigate = useNavigate()

    return (
        <div className="card bg-base-100 border">
            <figure className="px-5 pt-5">
                <img
                    src={image}
                    alt={serviceName}
                    className="rounded-xl h-[240px] w-full" />
            </figure>
            <div className="card-body p-5 text-left">
                <h2>Name: {counselor} </h2>
                <h2 className="card-title"> {serviceName} </h2>
                <p>Category: {category}</p>
                <p>Price: {pricing}</p>
                <p>Price: {duration}</p>
                <div className="card-actions">
                    <button  onClick={()=>navigate(`/serviceDetails/${id}`)} className="btn bg-cyan-500 text-white font-semibold">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;