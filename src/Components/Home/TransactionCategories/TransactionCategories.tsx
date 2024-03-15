import Image from "next/image";
import sendMoney from "../../../../public/images/sendmoney.webp";


const TransactionCategories = () => {
  return (
    <div className="my-16 px-8 lg:px-16">
      <h2 className="text-white text-4xl font-semibold text-center mb-8">
        Transaction Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="primary-colour hover:bg-[#90006F] p-4 rounded-xl">
          <div className="w-[8rem]">
            <Image src={sendMoney} alt="send money" className="h-full w-full" />
          </div>
          <h2 className="text-4xl font-medium text-white pb-2">Send Money</h2>
          <p className="text-white">
            With just a few taps, send money from your account to another
            account or to any other mobile number at any time.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default TransactionCategories;
