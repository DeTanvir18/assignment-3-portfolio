import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-12 px-4 py-10">
            <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-[18px] font-semibold text-pink-800 py-2 uppercase">Tanvir.dev</span>
                    <p className="my-2">I am a junior MERN stack developer on a mission to become a senior developer in the coming years and to explore creating interactive web experiences.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-[#f6e2e2] py-2 uppercase">Services:</h2>
                    <ul className="my-2 flex flex-col space-x-1">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript</li>
                        <li>Tailwind</li>
                        <li>React</li>
                        <li>Mongo DB</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-[#fff] py-2 uppercase">Contact</h3>
                    <p className="my-1">Email: tanvirahmed18.ta@gmail.com</p>
                    <p className="my-1">Phone: +880 1********</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-[#fff] py-2 uppercase">Follow Me</h2>
                    <div className="flex space-x-4">
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
        </footer>
    );
};

export default Footer;