import Image from "next/image";
import sendMoney from "../../../../public/images/sendmoney.webp";
import cashOut from "../../../../public/images/cashout.webp";
import mobileRecharge from "../../../../public/images/mobileRecharge.webp";
import payment from "../../../../public/images/payment.webp";
import paybil from "../../../../public/images/paybil.webp";
import adMoney from "../../../../public/images/addmoney.webp";
import savings from "../../../../public/images/savings.webp";
import loan from "../../../../public/images/loan.webp";
import transferMoney from "../../../../public/images/transfermoney.webp";
import requestMoney from "../../../../public/images/requestMoney.webp";
import remittance from "../../../../public/images/remontens.webp";
import microfinance from "../../../../public/images/microfinenc.webp";
import educationFee from "../../../../public/images/education.webp";
import donation from "../../../../public/images/donation.webp";
import insurance from "../../../../public/images/insorence.webp";
import Container from "@/Components/shared/Container";

const TransactionCategories = () => {
  return (
    <Container>
      <div className="my-16">
        <h2 className="text-white text-4xl font-semibold text-center mb-8">
          Transaction Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="border border-[#009286] hover:bg-[#009286]  rounded-xl">
            <div className="w-[8rem] mx-auto">
              <Image src={sendMoney} alt="send money" className="" />
            </div>
            <h2 className="text-4xl text-center font-medium text-white">
              Send Money
            </h2>
          </div>
          <div className="border border-[#009286] hover:bg-[#009286] p-4  rounded-xl h-full">
            <div className="w-[8rem] mx-auto">
              <Image src={cashOut} alt="Cash Out" className="" />
            </div>
            <h2 className="text-4xl text-center font-medium text-white">
              Cash out
            </h2>
          </div>
          <div className="border border-[#009286] hover:bg-[#009286] p-4 rounded-xl">
            <div className="w-[8rem] mx-auto">
              <Image
                src={mobileRecharge}
                alt="Mobile Recharge"
                className="h-full w-full"
              />
            </div>
            <h2 className="text-4xl text-center font-medium text-white">
              Mobile Recharge
            </h2>
          </div>
          <div className="border border-[#009286] hover:bg-[#009286] p-4 rounded-xl">
            <div className="w-[8rem] mx-auto">
              <Image src={payment} alt="payment" className="h-full w-full" />
            </div>
            <h2 className="text-4xl text-center font-medium text-white">
              Payment
            </h2>
          </div>
          <div className="border border-[#009286] hover:bg-[#009286] p-4 rounded-xl">
            <div className="w-[8rem] mx-auto">
              <Image src={paybil} alt="pay bill" className="h-full w-full" />
            </div>
            <h2 className="text-4xl text-center font-medium text-white">
              pay bill
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TransactionCategories;
