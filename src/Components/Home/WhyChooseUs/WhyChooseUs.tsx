import choose1 from "../../../assets/choose-1.jpg"
import choose2 from "../../../assets/choose-2.jpg"
import choose3 from "../../../assets/choose-3.jpg"
import { MdOutlineCheckCircle } from "react-icons/md";
import Image from "next/image";

const WhyChooseUs = () => {

    return (
        <div className="flex flex-col  lg:flex-row max-w-screen-xl mx-auto gap-12 px-6 2xl:px-0 my-6 md:my-8 lg:my-80">
            <div className="lg:w-3/4 space-y-6 ">
                <h1 className="text-secondary">Why Choose Us</h1>
                <h1 className="text-white text-3xl font-bold">Moving And Living Abroad Just Got Simpler Get Paid Like A Local</h1>
                <p className="text-white">Living abroad? Our service simplifies money transactions. No more banking hassles or conversion fees. Get paid locally, worldwide. Swift, secure transactions on our platform. Manage finances effortlessly while abroad. Freelancing, remote work, or exploring internationally? Trust us for easy, reliable money management.</p>
                <div className="text-white space-y-3">
                    <div className="bg-[#0e0e0e] p-4 rounded-full">
                        <p className="flex items-center gap-2"><MdOutlineCheckCircle size={22} className="primary-color" />Send money cheaper and easier than old-school banks.</p>
                    </div>
                    <div className="bg-[#0e0e0e] p-4 rounded-full">
                        <p className="flex items-center gap-2"><MdOutlineCheckCircle size={22} className="primary-color" />Spend abroad without the hidden fees.</p>
                    </div>
                    <div className="bg-[#0e0e0e] p-4 rounded-full">
                        <p className="flex items-center gap-2"><MdOutlineCheckCircle size={22} className="primary-color" />Move money between countries for salary & more.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex-1">
                    <Image className="rounded-lg" src={choose1} alt="choose1" />
                </div>
                <div className="rounded-lg flex flex-col gap-6 flex-1">
                    <Image className="rounded-lg" src={choose2} alt="choose2" />
                    <Image className="rounded-lg" src={choose3} alt="choose3" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;