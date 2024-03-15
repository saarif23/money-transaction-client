import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import Homes from "@/Components/Home/Homes";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import Navbar from "@/Components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homes/>  
      <TransactionCategories />
      <DownloadApp />
      <WhyChooseUs />
    
    </main>
  );
}
