import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import Image from "next/image";

import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import Navbar from "@/Components/shared/Navbar/Navbar";
import AllOffers from "@/Components/Home/Offers/AllOffers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TransactionCategories></TransactionCategories>
      <DownloadApp></DownloadApp>
      <WhyChooseUs />
      <AllOffers></AllOffers>
    </main>
  );
}
