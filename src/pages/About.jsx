import AboutUsHero from "../components/aboutUs/AboutUsHero";
import CompanyIntro from "../components/aboutUs/CompanyIntro";
import ExclusiveProducts from "../components/aboutUs/ExclusiveProducts";
import PhotoCarousel from "../components/PhotoCarousel";
import ServicesLink from "../components/aboutUs/ServicesLink";
import WhyChooseUs from "../components/aboutUs/WhyChooseUs";
import { aboutCarouselImages } from "../data/about/AboutData";

export default function About() {
  return (
    <>
      <AboutUsHero />
      <CompanyIntro />
      <WhyChooseUs />
      <PhotoCarousel images={aboutCarouselImages} />
      <ExclusiveProducts />
      <ServicesLink />
    </>
  );
}