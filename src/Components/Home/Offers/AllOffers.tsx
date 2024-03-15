import Container from "@/Components/shared/Container";
import image2 from "@/assets//offers/image2.jpg";
import image1 from "@/assets//offers/image1.jpg";
import image11 from "@/assets//offers/image1.png";
import image3 from "@/assets//offers/image3.jpg";
import image4 from "@/assets//offers/image4.jpg";
import image5 from "@/assets//offers/image5.jpg";
import Image from "next/image";
import { GiJourney } from "react-icons/gi";
import Button from "@/Components/shared/Button";

const AllOffers = () => {
  return (
    <div
   
    >
      <Container>
        <div className="text-center">
          <h3 className="text-4xl font-bold text-[#009286]">All Offers</h3>
          <p>Experience all the amazing campaigns below</p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 ">
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image11}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image1}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image2}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image3}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image4}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
          <div className="h-[320px] bg-[#171719] rounded-2xl">
            <div className="m-3 relative  text-center space-y-5">
              <Image
                className="rounded-2xl w-full h-[230px] "
                src={image5}
                alt="image1"
                width={250}
                height={300}
              />
              <div className="flex items-center gap-2 bg-black/80 text-white/80 text-sm font-medium px-2 py-1 rounded-lg absolute top-0 left-4 cursor-pointer">
                <GiJourney
                  size={24}
                  className="border border-white/80 rounded-full p-1"
                />
                <span>Tour & Travel</span>
              </div>
              <Button btn_text="View Offer" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllOffers;
