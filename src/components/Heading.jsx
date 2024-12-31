import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className="mx-auto  flex flex-col justify-center items-center text-center max-w-4xl">
            <h1 className=" text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="py-6">{subtitle}</p>
        </div>
    );
};

export default Heading;