import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import Homes from "@/Components/Home/Homes";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import Footer from "@/Components/Home/Footer/Footer"
export default function Home() {
  return (
    <main>
   

        <Homes /> 
     
      <DownloadApp />
      <TransactionCategories />
      <WhyChooseUs /> 
   <div className="mt-96">
        <Footer />
   </div>
    </main>
  );
}
