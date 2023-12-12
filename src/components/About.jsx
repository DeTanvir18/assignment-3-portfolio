

const About = () => {
    return (
        <div id="About">
            <div className="lg:px-56 px-10 lg:py-0 py-20 lg:text-start text-center gap-5 flex lg:flex-row flex-col justify-between items-center lg:gap-28">
                <img data-aos="fade-down" src="https://i.ibb.co/jMcxJqX/Tanvir.jpg" alt="" className="h-72 w-72 rounded p-1 border border-fuchsia-500" />
                <div className="h-full lg:py-40 flex flex-col justify-center items-center lg:items-start text-white">
                    <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-500">About Me</h1>
                    <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum exercitationem, distinctio sint sit ducimus perferendis aspernatur ea cupiditate fuga.</p>


                    <div className="flex mt-8 gap-2">
                        <div className="flex justify-center items-center">
                            <div className="flex space-x-2">
                                <button className="neno-button shadow-xl hover:shadow-fuchsia-700 text-white border border-fuchsia-300 hover:bg-fuchsia-800 rounded-lg py-4 px-8 relative overflow-hidden">Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;