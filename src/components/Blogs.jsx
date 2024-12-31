import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='my-10'>
            <Heading
                title={"Our Blogs"}
                subtitle={"Explore the most in-demand professions shaping the job market this year."}
            ></Heading>


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => null}
                onSlideChange={() => null}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                <section >
                    {
                        blogs?.map(blog => <SwiperSlide
                            key={blog.id}
                        >
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className='h-[200px] w-full'
                                        src={blog.image}
                                        alt={blog.title} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.excerpt}</p>
                                    <div className='divider my-1'></div>
                                    <div className='flex justify-between items-center'>
                                        <p>{blog.author}</p>
                                        <p>{blog.date}</p>
                                    </div>
                                    <div className="card-actions  justify-end">
                                        <Link to={`/fullBlog/${blog.id}`} state={blog.id} className="btn bg-cyan-500 text-white">Show Blog</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </section>

            </Swiper>


        </div>
    );
};

export default Blogs;