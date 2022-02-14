import CookiesButton from '@/components/CookiesButton';
import Footer from '@/modules/Footer/Footer';
import ProductsGrid from '@/modules/MainGrid/ProductsGrid';
import Navbar from '@/modules/Navbar/Navbar';

const Index = () => {
  return (
    <>
      <div className=" border-b border-[#DEDEDE] pb-3 ">
        <Navbar />
      </div>
      <ProductsGrid />
      <CookiesButton />
      <div className=" border-t border-[#DEDEDE]  ">
        <Footer />
      </div>
    </>
  );
};

export default Index;
