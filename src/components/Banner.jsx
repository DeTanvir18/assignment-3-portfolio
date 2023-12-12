import { AiFillGithub } from "react-icons/ai";
import { FaArrowAltCircleRight, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-scroll";



const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])


    return (
        <div className="bg-[#2c6c9d] py-60">
            <div data-aos="fade-up" name='home' className='w-full'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col-reverse lg:flex-row justify-center h-full'>
                    <div>
                        <p className='text-[#39a4ad] text-xl font-bold'>I am</p>
                        <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                            Tanvir Ahmed
                        </h1>
                        <h2 className='text-2xl sm:text-3xl font-bold text-[#1097a3]'>
                            I am a Junior MERN Stack Developer.
                        </h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I am on a mission to become a senior developer in the coming years and to explore creating interactive web experiences.
                        </p>
                        <div>
                            <Link to="Projects">
                                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1097a3]'>
                                    Projects
                                    <span className='group-hover:rotate-90 duration-300'>
                                        <FaArrowAltCircleRight className='ml-3' />
                                    </span>
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <img src="https://i.ibb.co/jMcxJqX/Tanvir.jpg" alt="" className="h-72 w-72 rounded-full p-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;