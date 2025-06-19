import ServiceCard from "../components/services/ServiceCard";
import ServicesHero from "../components/services/ServicesHero";
import { services } from "../data/homepage/ServicesPreviewData";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <section className="min-h-screen py-12 sm:py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-20 md:px-0">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}