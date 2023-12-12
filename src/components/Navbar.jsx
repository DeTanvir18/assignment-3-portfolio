import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import resume from '../../public/SCIC_task_2_personal branding.pdf'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const navLinks = <>
        <div className="lg:hidden block absolute w-full top-16 right-0 left-0 bg-slate-600 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Home</li></Link>
                <Link spy={true} smooth={true} to="About"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">About</li></Link>
                <Link spy={true} smooth={true} to="Services"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Services</li></Link>
                <Link spy={true} smooth={true} to="Projects"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Projects</li></Link>
                <Link spy={true} smooth={true} to="Contact"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Contact</li></Link>
            </ul>
        </div>
    </>

    return (
        <nav className="bg-slate-100 ">
            <div className="h-10vh max-w-5xl mx-auto flex justify-between z-50 lg:py-5 py-4 border-b border-slate-400">
                <div className="flex items-center flex-1">
                    <span className="text-2xl font-semibold">Tanvir.dev</span>
                </div>

                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div>
                    {click && navLinks}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
                <ul>
                    <li className='w-[100px] h-[40px] px-2 flex justify-between items-center mr-[-70px] hover:mr-[-2px] duration-300 bg-sky-500'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                           <FaLinkedin size={20} /> LinkedIN
                        </a>
                    </li>
                    <li className='w-[100px] h-[40px] px-2 flex justify-between items-center mr-[-70px] hover:mr-[-2px] duration-300 bg-[#252222]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/DeTanvir18'
                            target="blank"
                        >
                           <FaGithub size={20} /> Github
                        </a>
                    </li>
                    <li className='w-[100px] h-[40px] px-2 flex justify-between items-center mr-[-70px] hover:mr-[-2px] duration-300 bg-[#ca41cd]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            <HiOutlineMail size={20} /> Email
                        </a>
                    </li>
                    <li className='w-[100px] h-[40px] px-2 flex justify-between items-center mr-[-70px] hover:mr-[-2px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={resume} 
                            download="Resume"
                        >
                            <BsFillPersonLinesFill size={20} /> Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;