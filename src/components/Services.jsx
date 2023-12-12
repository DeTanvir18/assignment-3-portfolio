
const Services = () => {
    return (
        <div id="Services" className="p-20 flex flex-col justify-center items-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-500 rounded-3xl h-36 w-44 border-2 border-fuchsia-500 b_glow">HTML5</h2>
                <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-500 rounded-3xl h-36 w-44 border-2 border-fuchsia-500 b_glow">CSS3</h2>
                <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-500 rounded-3xl h-36 w-44 border-2 border-fuchsia-500 b_glow">JavaScript</h2>
                <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-500 rounded-3xl h-36 w-44 border-2 border-fuchsia-500 b_glow">React</h2>
            </div>
        </div>
    );
};

export default Services;