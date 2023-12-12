
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import resume from '../../public/SCIC_task_2_personal branding.pdf'

const About = () => {
    return (
        <div id="About" className='bg-[#cae5e3]'>
            <div className=' max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-20 px-6 py-20'>
                <div className='flex-1'>
                    <img src="https://i.ibb.co/yN7d0Z8/MERN-Stack-Development-and-Consulting-Services.jpg" alt="" className="lg:h-[280px]" />
                </div>
                <div className='flex-1'>
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl font-semibold mb-4 leading-normal uppercase text-sky-700">About Me</h1>
                        <div>
                            <div>
                                <p>I am passionate about building excellent software that improves
                                    the lives of those around me.<br/>
                                    I have completed my graduation from the National University of Bangladesh, and it has been about a year since I entered the web development field.<br/>
                                     I specialize in creating software
                                    for clients ranging from individuals and small-businesses all the
                                    way to large enterprise corporations. <br/>
                                    What would you do if you had
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
                            <a className="transition-all duration-150 ease-in-out" href="https://www.facebook.com/tanvirahmed.tanu.3">
                                <FaFacebook />
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