import AboutUsHero from "../components/aboutUs/AboutUsHero";
import CompanyIntro from "../components/aboutUs/CompanyIntro";
import ExclusiveProducts from "../components/aboutUs/ExclusiveProducts";
import PhotoCarousel from "../components/PhotoCarousel";
import ServicesLink from "../components/aboutUs/ServicesLink";
import WhyChooseUs from "../components/aboutUs/WhyChooseUs";

const aboutCarouselImages = [
  "/Store/Store1.jpg",
  "/Store/Store2.jpg",
  "/Store/Store3.jpg",
  "/Store/Store4.jpg",
  "/Store/Store5.jpg",
  "/Store/Store6.jpg",
  "/Store/Store7.jpg",
  "/Store/Store8.jpg",
  "/Store/Store9.jpg",
  "/Store/Store10.jpg",
  "/Store/Store11.jpg",
];

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