import { Link } from 'react-scroll';
import Group1Image from '../assets/group1.jpg'
import Heading from './Heading';

const CardBanner = () => {
    return (
        <div
            className="hero h-[450px] my-14 rounded-2xl"
            style={{
                backgroundImage: `url(${Group1Image})`,
            }}>
            <div className="flex items-center justify-center bg-gradient-to-r from-cyan-900  w-full h-full rounded-2xl ">
                <div className="hero-content  text-white text-center">
                    <div className="max-w-2xl">
                        <Heading
                            title={'Your Career, Our Commitment'}
                            subtitle={'Expert guidance to help you navigate your professional journey with confidence and clarity'}
                        ></Heading>
                        <Link 
                        to='contact-feel-free'
                        smooth={true}
                        duration={1000}
                        className="btn bg-cyan-700 border-cyan-500 hover:bg-transparent hover:border hover:border-cyan-400 text-white">Let's Join Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBanner;