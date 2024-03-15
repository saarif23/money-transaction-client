import Image from "next/image";
import BlogsBanner from "./BlogsBanner";
import img1 from "../../../public/images/blog-1.jpg";
import { MdOutlineCheckCircle } from "react-icons/md";

const Blogs = () => {
  return (
    <div>
      <BlogsBanner></BlogsBanner>
      <div className="my-24 flex flex-col lg:flex-row px-8 md:px-10">
        <div className="lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-16">
          <div className="">
            <div className="">
              <Image src={img1} alt="Blog Img" className="h-full w-full" />
            </div>
            <div className="space-y-4 pt-6  px-3">
              <h2 className="text-2xl text-justify hover:text-teal-300 cursor-pointer">
                The Security Risks Of Changing Package Owners
              </h2>
              <p className="text-lg font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisc elit vitae
                commodo nunc vel quis edout habitant libero text ipsum amet ...
                <span className="text-primary cursor-pointer urderline">
                  Read More
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <Image src={img1} alt="Blog Img" className="h-full w-full" />
            </div>
            <div className="space-y-4 pt-6 px-3">
              <h2 className="text-2xl text-justify hover:text-teal-300 cursor-pointer">
              The Power Of Data: Leveraging Analytics For Business Finance
              </h2>
              <p className="text-lg font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisc elit vitae
                commodo nunc vel quis edout habitant libero text ipsum amet ...
                <span className="text-primary cursor-pointer urderline">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] mx-auto my-10 lg:my-0">
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-2 border-teal-500 focus:outline-none placeholder:text-white text-lg w-full py-2 px-4"
            />
          </div>
          <div className="my-8 lg:my-16 border border-2 border-teal-500 p-8">
            <h2 className="pb-6 pt-4 text-4xl">Other Services</h2>
            <div>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                Saving Account
              </p>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                Business Account
              </p>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                Loan Facility
              </p>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                Multiple Accounts
              </p>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                Expense Track
              </p>
              <p className="flex  items-center text-[1.5rem] font-medium gap-3 pb-4">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                DPS & FDR
              </p>
              <p className="flex items-center text-[1.5rem] font-medium gap-3 pb-4 text-center">
                <MdOutlineCheckCircle size={22} className="text-primary " />
                International Account
              </p>
            </div>
          </div>
          <div className="my-16 border border-2 border-teal-500 p-8">
            <h2 className="pb-8 pt-4 text-4xl">Recent Posts</h2>
            <div>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-[10rem]">
                  <Image src={img1} alt="Blog Img" className="h-full w-full" />
                </div>
                <div>
                  <p className="text-[1.2rem] text-left font-medium">
                    Empowering businesses with data-driven insights
                  </p>
                  <h2 className="text-[0.8rem] text-left text-primary">October 4, 2023</h2>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4 mb-4">
                <div className="w-[10rem]">
                  <Image src={img1} alt="Blog Img" className="h-full w-full" />
                </div>
                <div>
                  <p className="text-[1.2rem] text-left font-medium">
                  Spending Habits, 13 Tips for grow Your Money.
                  </p>
                  <h2 className="text-[0.8rem] text-left text-primary">October 4, 2023</h2>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-[10rem]">
                  <Image src={img1} alt="Blog Img" className="h-full w-full" />
                </div>
                <div>
                  <p className="text-[1.2rem] text-left font-medium">
                  The Power of Data: Leveraging Analytics for
                  </p>
                  <h2 className="text-[0.8rem] text-left text-primary">October 4, 2023</h2>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-[10rem]">
                  <Image src={img1} alt="Blog Img" className="h-full w-full" />
                </div>
                <div>
                  <p className="text-[1.2rem] text-left font-medium">
                  Maximizing profitability through efficiency and 
                  </p>
                  <h2 className="text-[0.8rem] text-left text-primary">October 4, 2023</h2>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-[10rem]">
                  <Image src={img1} alt="Blog Img" className="h-full w-full" />
                </div>
                <div>
                  <p className="text-[1.2rem] text-left font-medium">
                    Empowering businesses with data-driven insights
                  </p>
                  <h2 className="text-[0.8rem] text-left text-primary">October 4, 2023</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
