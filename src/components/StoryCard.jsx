import React from 'react';

const StoryCard = ({s}) => {
    const {name, quote, achievement, image, company} = s
    return (
        <div className='p-10 border rounded-2xl bg-white space-y-2'>
            <img className='h-20' src={image} alt="" />
            <h1 className='text-3xl font-bold'>{achievement}</h1>
            <p>{company}</p>
            <h2 className='text-xl font-semibold'>Name: {name}</h2>
            <p><span className='font-bold'>feedback:</span> {quote}</p>
            
        </div>
    );
};

export default StoryCard;