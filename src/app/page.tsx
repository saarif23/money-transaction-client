import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import Homes from "@/Components/Home/Homes";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import Footer from "@/Components/Home/Footer/Footer"
import AllOffers from "@/Components/Home/Offers/AllOffers";
export default function Home() {
  return (
    <main>
      <TransactionCategories/>
          <DownloadApp />
           <WhyChooseUs />
      <AllOffers/>
    </main>
  );
}
