import Hero from "../components/homePage/Hero";
import ProductHighlights from "../components/homePage/ProductHighlights";
import ServicesPreview from "../components/homePage/ServicesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProductHighlights />
    </>
  );
}