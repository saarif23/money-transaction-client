import DownloadApp from "@/Components/Home/DownloadApp/DownloadApp";
import TransactionCategories from "@/Components/Home/TransactionCategories/TransactionCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <DownloadApp></DownloadApp>
     <TransactionCategories></TransactionCategories>
    </main>
  );
}
