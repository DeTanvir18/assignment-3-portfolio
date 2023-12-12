import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        
        <div id="Projects" className='w-full'>
            <div className='max-w-[1000px] mx-auto py-24 p-4 flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-5xl font-bold border-b-4 text-sky-700'>Projects</p>
                    <p className='py-6 text-[#1097a3] text-xl font-semibold'>Have a look at some of My Recent Projects</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <div data-aos="fade-down" className="bg-[url('https://i.ibb.co/CMq3XgJ/fresh-foods-landing-page.png')] bg-cover bg-center py-6 px-4 shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center text-center items-center mx-auto content-div">
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Fresh Foods
                            </span>
                            <div className="pt-8 text-center flex flex-col items-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/DeTanvir18/fresh-foods" target="_blank">
                                <button className="flex justify-center items-center gap-2 rounded-lg px-4 py-3 m-2 bg-[#fff] text-gray-700 font-bold text-lg"><FaGithub /> Code</button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://assign12-fresh-foods.web.app/" target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#fff] text-gray-700 font-bold text-lg">Live Site</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="bg-[url('https://i.ibb.co/VChbzG3/careerhunterlandingpage530x456.png')] bg-cover bg-center py-6 px-4 shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center text-center items-center mx-auto content-div">
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Career Hunter
                            </span>
                            <div className="pt-8 text-center flex flex-col items-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/DeTanvir18/career-hunter" target="_blank">
                                <button className="flex justify-center items-center gap-2 rounded-lg px-4 py-3 m-2 bg-[#fff] text-gray-700 font-bold text-lg"><FaGithub /> Code </button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://assign11-career-hunt.web.app/" target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#fff] text-gray-700 font-bold text-lg">Live Site</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="bg-[url('https://i.ibb.co/HnSJJ1P/carshoplandingpage530x456.png')] bg-cover bg-center py-6 px-4 shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center text-center items-center mx-auto content-div">
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Car Heaven
                            </span>
                            <div className="pt-8 text-center flex flex-col items-center ">
                                {/* eslint-disable-next-line */}
                                <a href="https://github.com/DeTanvir18/my-brand-shop" target="_blank">
                                <button className="flex justify-center items-center gap-2 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"><FaGithub />  Code</button>
                                </a>
                                {/* eslint-disable-next-line */}
                                <a href="https://assign-10-brand-shop.web.app/" target="_blank">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#fff] text-gray-700 font-bold text-lg">Live Site</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;