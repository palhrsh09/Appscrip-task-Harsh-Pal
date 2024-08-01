import Link from "next/link";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsPage from "./products/page";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className="md:border-b flex flex-col gap-[60px] pt-[36px] pb-[18px]">
        <Header />
        <Navbar />
      </div>
        <div className="flex flex-col px-[10px] md:px-[80px]">

        
        <div className="py-[30px] flex flex-col items-center text-center">
  <div className="md:font-[800] font-[400] text-[24px] md:text-[36px] leading-[28px] md:leading-[43px] mb-4">
    DISCOVER OUR PRODUCTS
  </div>
  <div className="font-[400] text-[16px] md:text-[22px] leading-[22px] md:leading-[40px] max-w-[700px]">
    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
  </div>
</div>

<ProductsPage />

      </div>
      <Footer />
     
      
    </main>
  );
}
