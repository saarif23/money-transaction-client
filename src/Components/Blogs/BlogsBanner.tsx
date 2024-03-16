import Image from "next/image";
import blogBanner from "../../../public/images/blog-banner.jpg"


const BlogsBanner = () => {
    return (
        <div className="relative w-full h-full">
        <Image
          className="w-full h-[50vh] object-cover"
          src={blogBanner}
          alt="Banner"
          width={1200}
          height={500}
        />
        <div className="absolute flex item-center justfy-start top-0 left-0 w-full h-full bg-black opacity-70">
          <div className="flex justfy-start items-end bg-black h-full md:pl-[8rem]  lg:pl-[15rem] pb-[6rem]">
            <div>
              <h2 className="text-white text-7xl font-semibold hidden md:block">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BlogsBanner;