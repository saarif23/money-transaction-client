import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import Image from "next/image";

import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import Navbar from "@/Components/shared/Navbar/Navbar";


export default function Home() {
  return (
    <main>
     <DownloadApp></DownloadApp>
     <TransactionCategories></TransactionCategories>
      <Navbar />
      <DownloadApp></DownloadApp>
      <WhyChooseUs />
    </main>
  );
}
