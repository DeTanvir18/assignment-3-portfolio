
const Services = () => {
    return (
        <div data-aos="fade-down" id="Services" className="p-20 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold mb-20 leading-normal uppercase text-sky-700">Services</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/FmDQQpx/html.png" alt="" /> 
                  <h2 className="text-lg font-bold text-sky-600">HTML 5</h2> 
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/sbykhT4/css.png" alt="" /> 
                  <h2 className="text-lg font-bold text-sky-600">CSS 3</h2> 
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/XCYrrrV/tailwind.png" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">Tailwind CSS</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/wwybsYt/javascript.png" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">JavaScript</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/swPXddb/react.png" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">React JS</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/K2vTjFS/node.png" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">Node JS</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/vdP4T2C/firebase.png" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">Firebase</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 h-24 w-20 hover:scale-110 duration-500">
                  <img src="https://i.ibb.co/F71Hd55/mongo.pngg" alt="" />  
                  <h2 className="text-lg font-bold text-sky-600">Mongo DB</h2>
                </div>
            </div>
        </div>
    );
};

export default Services;