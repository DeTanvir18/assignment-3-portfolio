import Swal from "sweetalert2";

const Contact = () => {

    const handleContact = e => {
        e.preventDefault();
        const form = e.target;

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Contact info has been Submitted",
            showConfirmButton: false,
            timer: 1500
        });
        form.reset();
    }

    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col justify-center items-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-sky-700">Contact Me</h1>
            <form onSubmit={handleContact} action="" className="flex flex-col gap-2 lg:w-1/2 text-white">
                <div className="lg:flex gap-6">
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-sky-400 text-xl" placeholder="Enter Your Name" type="text" required/>
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-sky-400 text-xl" placeholder="Enter Your Email" type="email" required/>
                </div>
                <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-sky-400 text-xl" placeholder="Your Message Here..." name="" id="" cols="20" rows="10"></textarea>
                <input className="neno-button shadow-xl hover:shadow  border border-sky-700 bg-sky-500 hover:bg-slate-800 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden text-xl font-bold mb-10" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;