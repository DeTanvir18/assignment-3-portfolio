
const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col justify-center items-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <img data-aos="fade-up" className="flex items-center justify-center rounded-xl h-40 w-60 p-1 border-2 border-fuchsia-500 b_glow" src="https://i.ibb.co/CMq3XgJ/fresh-foods-landing-page.png" alt="" />
                <img data-aos="fade-down" className="flex items-center justify-center rounded-xl h-40 w-60 p-1 border-2 border-fuchsia-500 b_glow" src="https://i.ibb.co/HnSJJ1P/carshoplandingpage530x456.png" alt="" />
                <img data-aos="fade-up" className="flex items-center justify-center rounded-xl h-40 w-60 p-1 border-2 border-fuchsia-500 b_glow" src="https://i.ibb.co/VChbzG3/careerhunterlandingpage530x456.png" alt="" />
                <img data-aos="fade-down" className="flex items-center justify-center rounded-xl h-40 w-60 p-1 border-2 border-fuchsia-500 b_glow" src="https://i.ibb.co/VChbzG3/careerhunterlandingpage530x456.png" alt="" />
            </div>
        </div>
    );
};

export default Projects;