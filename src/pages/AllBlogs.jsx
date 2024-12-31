import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import BlogCard from '../components/BlogCard'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        document.title = "Blogs || CareerClimb"
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className='container mx-auto px-5 md:px-10 my-10'>
            <div className='my-10'>
                <Heading
                    title={"Our Blogs"}
                    subtitle={"Explore the most in-demand professions shaping the job market this year."}
                ></Heading>


                    <section className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            blogs?.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                            ></BlogCard>)
                        }
                    </section>
            </div>
        </div>
    );
};

export default AllBlogs;