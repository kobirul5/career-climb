import React from 'react';
import BannerImage1 from "../assets/bannerImag.jpg"
import BannerImage2 from "../assets/banner2imag.jpg"
import BannerImage3 from "../assets/banner3imag.jpg"
import BannerImage4 from "../assets/banner4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <img src={BannerImage1} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Unlock Your Career Potential with Expert Guidance</h1>
                        <p>Explore our range of personalized career services, from resume reviews to interview preparation. Whether online or offline, our experienced counselors are here to help you reach your professional goals</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <img src={BannerImage2} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Transform Your Career Path with Professional Insights</h1>
                        <p>Discover actionable advice from industry experts to navigate challenges, enhance skills, and unlock opportunities, empowering you to build a fulfilling and successful career journey.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn  btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <img src={BannerImage3} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Navigating Career Choices with Proven Guidance</h1>
                        <p>Gain clarity on your career goals with expert-backed insights, helping you make confident decisions and pursue a path aligned with your passions and aspirations.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        <img src={BannerImage4} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl md:text-5xl  font-bold mb-5'>Empowering Your Career: Expert Tips for Success</h1>
                        <p>Discover actionable advice from industry experts to navigate challenges, enhance skills, and unlock opportunities, empowering you to build a fulfilling and successful career journey.</p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;