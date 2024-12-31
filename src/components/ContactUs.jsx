import { IoCall } from "react-icons/io5";

const ContactUs = () => {
    return (
        <div id="contact-feel-free" className="container mx-auto hero px-5 md:px-10 py-20 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-[55%]">
                    <h1 className="text-xl font-bold">Talk To Our Career Expert</h1>
                    <h1 className="text-2xl md:text-4xl font-bold border-b pb-3">Please Feel Free To Contact Us</h1>

                    <h2 className="text-xl font-bold my-3">Sun - Mun (9:00 AM to 10:00 PM) </h2>

                    <p className="py-6">We understand that deciding on the right career path can feel overwhelming and uncertain. The choices you make today will influence your future success and personal growth. That's why we encourage you to connect with our dedicated career counselors, who are here to guide you every step of the way. With their expertise, you'll receive personalized advice and the support you need to confidently make decisions that align with your ambitions and values. Let us help you turn your aspirations into actionable goals.</p>

                    <div className="flex items-center gap-5">
                        <IoCall className="text-5xl p-2 rounded-full bg-white text-cyan-800" />
                        <div>
                            <p>Call to Ask Question</p>
                            <p>+880 142 432 4233</p>
                        </div>
                    </div>
                </div>
                <div className="card p-0 md:w-full lg:w-[45%]">
                    <form className="card-body p-0">
                        <div className="form-control">
                            <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name="number" type="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn border-white bg-cyan-800 text-white hover:text-cyan-800 hover:bg-white">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;