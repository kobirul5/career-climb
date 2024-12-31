import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title,excerpt, image, author, date} = blog
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img 
                    className='h-[200px] w-full'
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{excerpt}</p>
                <div className='divider my-1'></div>
                <div className='flex justify-between items-center'>
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
                <div className="card-actions  justify-end">
                    <Link  to={`/fullBlog/${blog.id}`} state={blog.id} className="btn btn-primary">Show Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;