
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from '../../public/SCIC_task_2_personal branding.pdf'

const About = () => {
    return (
        <div id="About" className='bg-[#cae5e3]'>
            {/* <div id="About">
                <div className="px-10 lg:py-0 py-10 lg:text-start text-center gap-5 flex lg:flex-row flex-col justify-between items-center lg:gap-10">
                    <img src="https://i.ibb.co/jMcxJqX/Tanvir.jpg" alt="" className="w-56 h-48 rounded-full p-1" />
                    <div className="h-full lg:py-20 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-sky-700">About Me</h1>
                        <div className='px-4'>
                            <div className='text-2xl font-bold'>
                                <p>Hello! I am Tanvir Ahmed.</p>
                            </div>
                            <div>
                                <p>I am passionate about building excellent software that improves
                                    the lives of those around me. I specialize in creating software
                                    for clients ranging from individuals and small-businesses all the
                                    way to large enterprise corporations. What would you do if you had
                                    a software expert available at your fingertips?</p>
                            </div>
                        </div>


                        <div className="flex mt-8 gap-2">
                            <div className="flex justify-center items-center">
                                <div className="flex space-x-2">
                                    <a href={resume} download="Resume">
                                        <button className="border border-fuchsia-300 hover:bg-fuchsia-300 rounded-lg py-4 px-8 relative overflow-hidden">Resume</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className=' max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-20 px-6 py-20'>
                <div className='flex-1'>
                    <img src="https://i.ibb.co/yN7d0Z8/MERN-Stack-Development-and-Consulting-Services.jpg" alt="" className="" />
                </div>
                <div className='flex-1'>
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl font-semibold mb-4 leading-normal uppercase text-sky-700">About Me</h1>
                        <div>
                            <div>
                                <p>I am passionate about building excellent software that improves
                                    the lives of those around me. I specialize in creating software
                                    for clients ranging from individuals and small-businesses all the
                                    way to large enterprise corporations. What would you do if you had
                                    a software expert available at your fingertips?</p>
                            </div>
                        </div>


                        <div className="flex mt-2 gap-2">
                            <div className="flex justify-center items-center">
                                <div className="flex space-x-2">
                                    <a href={resume} download="Resume">
                                        <button className="bg-[#1097a3] text-white font-bold rounded-lg py-4 px-8 relative overflow-hidden">Resume</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <a className="transition-all duration-150 ease-in-out" href="https://github.com/DeTanvir18">
                                <FaGithub></FaGithub>
                            </a>
                            <a className="transition-all duration-150 ease-in-out" href="">
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a className=" transition-all duration-150 ease-in-out" href="">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a className=" transition-all duration-150 ease-in-out" href="">
                                <FaInstagram></FaInstagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;