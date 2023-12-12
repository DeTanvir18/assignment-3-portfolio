
const Contact = () => {
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col justify-center items-center">
            <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact Me</h1>
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6">
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 b_glow text-xl text-white" placeholder="Enter Your Name" type="text" />
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 b_glow text-xl text-white" placeholder="Enter Your Name" type="text" />
                </div>
                <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-500 b_glow text-xl text-white" placeholder="Your Message Here..." name="" id="" cols="20" rows="10"></textarea>
                <input className="neno-button shadow-xl hover:shadow-fuchsia-500 text-white border border-fuchsia-800 bg-fuchsia-500 hover:bg-slate-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl font-bold mb-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;