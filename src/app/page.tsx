import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import Homes from "@/Components/Home/Homes";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import WhyChooseUs from "@/Components/Home/WhyChooseUs/WhyChooseUs";
import AllOffers from "@/Components/Home/Offers/AllOffers";
export default function Home() {
  return (
    <main>
      <DownloadApp />
      <TransactionCategories />
      <WhyChooseUs />
      <AllOffers></AllOffers>
    </main>
  );
}
