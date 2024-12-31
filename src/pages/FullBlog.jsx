import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const FullBlog = () => {
    useEffect(()=>{
        document.title = "Blog Details || CareerClimb"
    },[])
    const blog = useLoaderData()
    const { title, author, date, description, list_items, conclusion } = blog || {}

    return (
        <div>
            <div className="container mx-auto px-5 md:px-10 space-y-5 my-14 text-xl">
                <div className="space-y-3">
                    <h1 className='text-3xl md:text-5xl font-bold'>{title}</h1>
                    <p className='font-bold'>{author}</p>
                    <p>{date}</p>
                </div>
                <p>{description}</p>
                <h3 className='font-bold'>Steps to Follow:</h3>
                <ul>
                    {list_items.map((item, idx) => <li key={idx} >{item}</li>)}
                </ul>
                <p className='font-bold'>Conclusion</p>
                <p>{conclusion}</p>
            </div>
        </div>
    );
};

export default FullBlog;