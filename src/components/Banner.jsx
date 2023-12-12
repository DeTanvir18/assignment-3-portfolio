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
            {/* <div className="lg:px-20 px-10 lg:py-0 py-10 lg:text-start text-center gap-5 flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-12">
                <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start  ">
                    <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">Welcome to <span className="text-fuchsia-500">My Website</span></h1>
                    <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem, distinctio sint sit ducimus perferendis aspernatur ea cupiditate fuga.</p>

                    <div className="flex mt-8 gap-2">
                        <div className="flex justify-center items-center">
                            <div className="flex space-x-2">
                                <a href="" className="text-fuchsia-500 hover:text-fuchsia-600 rounded-full glow p-2">
                                    <AiFillGithub className="text-[28px]" />
                                </a>
                                <a href="" className="text-fuchsia-500 hover:text-fuchsia-600 rounded-full glow p-2">
                                    <FaLinkedinIn className="text-[28px]" />
                                </a>
                                <a href="" className="text-fuchsia-500 hover:text-fuchsia-600 rounded-full glow p-2">
                                    <FaTwitter className="text-[28px]" />
                                </a>
                                <a href="" className="text-fuchsia-500 hover:text-fuchsia-600 rounded-full glow p-2">
                                    <FaInstagram className="text-[28px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <img data-aos="fade-up" src="https://i.ibb.co/jMcxJqX/Tanvir.jpg" alt="" className="h-72 w-72 rounded-full p-1 border border-fuchsia-500 img_glow" />
            </div> */}
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
                            I am a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I am focused on
                            building responsive full-stack web applications.
                        </p>
                        <div>
                            <Link to="Projects">
                                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1097a3]'>
                                    View Work
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