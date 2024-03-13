import Image from "next/image";
import downloadImg from "../../../.././public/images/download.png";
import { FaApple } from "react-icons/fa6";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa6";

const DownloadApp = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center primary-colour md:gap-24  bg-black px-0 md:px-6 lg:px-0 py-10">
      <div className="text-white   p-6 space-y-6">
        <h2 className="text-5xl lg:text-6xl font-bold ">
          Download Our{" "}
          <span className="text-[#90006F]">  Mobile Banking  <br />App</span>
        </h2>
        <p className="text-lg">
          Download our App and get free trial for 1 month by registering your
          account.
        </p>
        <div className="flex items-center gap-10">
          <div>
            <Link
              href=""
              className="flex justify-center items-center gap-1 secondery-colur p-2 rounded"
            >
              {" "}
              <FaApple className="text-4xl" />
              <div className="text-justify ">
                <h2 className="leading-6"> Get it on the </h2>
                <h2 className="text-lg font-semibold leading-6"> APP Store</h2>
              </div>
            </Link>
          </div>
          <div>
            <Link
              href=""
              className="flex items-center gap-2 bg-teal-400 p-2 rounded"
            >
              {" "}
              <FaGooglePlay className="text-3xl" />
              <div className="text-justify ">
                <h2 className="text-base"> Get it on </h2>
                <h2 className="md:text-lg font-semibold">
                  {" "}
                  Google Play
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[40rem] w-[25rem] p-2">
        <Image src={downloadImg} alt="Mobile App" className="h-full w-full" />
      </div>
    </div>
  );
};

export default DownloadApp;
