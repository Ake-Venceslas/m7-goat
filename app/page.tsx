import HeaderComponents from "@/src/components/Header/HeaderComponents";
import HeroComponents from "@/src/components/Hero/HeroComponents";
import ProductComponents from "@/src/components/Products/ProductComponents";
import ReviewComponents from "@/src/components/Reviews/ReviewComponents";
import FooterComponents from "@/src/components/Footer/FooterComponents";

export default function Home() {
  return (
    <div>
      <HeaderComponents />
      <HeroComponents />
      <ProductComponents />
      <ReviewComponents />
      <FooterComponents />
    </div>
  );
}
