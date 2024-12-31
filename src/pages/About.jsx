import Heading from "../components/Heading"
const About = () => {
    return (
        <div className="container mx-auto px-5 md:px-10 my-10">

            <section className="bg-gradient-to-b ">
                <Heading
                    title={'Empowering Your Career Growth, One Step at a Time'}
                    subtitle={'We provide expert career counseling, coaching, and resources to help individuals unlock their full potential.'}
                ></Heading>
            </section>
            <section className="p-5 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 bg-cyan-800 text-white rounded-3xl">
                {/* Who We Are */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">Who We Are</h1>
                    <p className="font-bold">CareerClimb is built on a foundation of expertise and a passion for helping people succeed. Our team includes: </p>

                    <ul className="list-disc ml-10">
                        <li>Certified Career Counselors with years of experience.</li>
                        <li>Leadership Coaches specializing in personal and professional growth.</li>
                        <li>Industry Experts who understand the demands of today's workforce.</li>
                    </ul>
                    <p>We've worked with thousands of clients to transform their career trajectories, and we're excited to help you do the same.</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">What We Offer</h1>
                    <p className="font-bold">Here's how we can help you climb your career ladder:</p>

                    <ul className="list-disc ml-10">
                        <li><span className="font-bold">Resume Reviews:</span> Craft resumes that get noticed</li>
                        <li><span className="font-bold">Interview Preparation:</span> Master your confidence with mock interviews and expert feedback.</li>
                        <li> <span className="font-bold">Career Coaching:</span> Receive guidance tailored to your goals.</li>
                        <li> <span className="font-bold">Leadership Workshops:</span> Develop skills to lead effectively. </li>
                        <li><span className="font-bold"> Personalized Career Planning:</span> Navigate your path to success with strategic planning. </li>
                    </ul>
                    
                </div>

            </section>
            <section className="my-10 p-5 md:p-16">
                <h2 className="text-center text-2xl md:text-5xl mb-5 font-semibold">Our Mission</h2>
                <p className="text-justify">
                    At CareerClimb, our mission is to guide individuals in achieving their professional aspirations. Whether it's resume building, interview preparation, or career growth planning, we're here to provide the tools and expertise you need to thrive.We believe that every career journey is unique, and our mission is to provide the personalized support you need to reach your goals. From fresh graduates to seasoned professionals, we are passionate about helping you thrive.
                </p>
            </section>

        </div>
    );
};

export default About;