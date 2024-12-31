import React from 'react';

const CommentsCard = ({comm}) => {
    return (
        <div className='border p-5 rounded-xl bg-white'>
            <h2 className='text-3xl font-semibold'>{comm?.name}</h2>
            <h2>{comm?.feedBack}</h2>
        </div>
    );
};

export default CommentsCard;