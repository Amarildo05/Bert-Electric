import CompanyIntro from "../components/aboutUs/CompanyIntro";
import ExclusiveProducts from "../components/aboutUs/ExclusiveProducts";
import HeroSection from "../components/aboutUs/HeroSection";
import PhotoCarousel from "../components/aboutUs/PhotoCarousel";
import ServicesLink from "../components/aboutUs/ServicesLink";
import WhyChooseUs from "../components/aboutUs/WhyChooseUs";

export default function About() {
  return (
    <>
      <HeroSection />
      <CompanyIntro />
      <WhyChooseUs />
      <PhotoCarousel />
      <ExclusiveProducts />
      <ServicesLink />
    </>
  );
}