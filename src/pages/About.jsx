import AboutUsHero from "../components/aboutUs/AboutUsHero";
import CompanyIntro from "../components/aboutUs/CompanyIntro";
import ExclusiveProducts from "../components/aboutUs/ExclusiveProducts";
import PhotoCarousel from "../components/aboutUs/PhotoCarousel";
import ServicesLink from "../components/aboutUs/ServicesLink";
import WhyChooseUs from "../components/aboutUs/WhyChooseUs";

export default function About() {
  return (
    <>
      <AboutUsHero />
      <CompanyIntro />
      <WhyChooseUs />
      <PhotoCarousel />
      <ExclusiveProducts />
      <ServicesLink />
    </>
  );
}