import ContactCTA from "../components/homePage/ContactCTA";
import HomepageHero from "../components/homePage/HomepageHero";
import ProductHighlights from "../components/homePage/ProductHighlights";
import ServicesPreview from "../components/homePage/ServicesPreview";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <ServicesPreview />
      <ProductHighlights />
      <ContactCTA />
    </>
  );
}