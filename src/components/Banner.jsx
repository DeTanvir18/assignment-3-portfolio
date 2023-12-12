import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750,
        })
    }, [])


    return (
        <div>
            <div className="lg:px-56 px-10 lg:py-0 py-20 lg:text-start text-center gap-5 flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-28">
                <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-white">
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
            </div>
        </div>
    );
};

export default Banner;