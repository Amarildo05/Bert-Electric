import ServiceCard from "../components/services/ServiceCard";
import ServicesHero from "../components/services/ServicesHero";

const services = [
  {
    title: "Instalime Elektrike",
    description:
      "Projektim dhe zbatim të kabinave elektrike, instalimeve shtëpiake dhe industriale.",
    icon: "pi pi-bolt",
    image: "/ServicesPage/Electrical-Instalation.jpg",
    link: "/sherbimet/instalime-elektrike",
  },
  {
    title: "Sisteme Monitorimi/Kamera",
    description:
      "Instalim profesional i kamerave për shtëpi, biznese dhe hapësira publike.",
    icon: "pi pi-video",
    image: "/ServicesPage/Security-Cameras.png",
    link: "/sherbimet/kamera",
  },
  {
    title: "Sisteme Alarmi",
    description:
      "Sisteme alarmi kundër vjedhjes dhe zjarrit për siguri maksimale.",
    icon: "pi pi-shield",
    image: "/ServicesPage/Alarm-Systems.jpg",
    link: "/sherbimet/alarmi",
  },
  {
    title: "Sisteme Audio",
    description:
      "Zgjidhje për audio të brendshme, njoftime publike dhe sisteme zëri.",
    icon: "pi pi-volume-up",
    image: "/ServicesPage/Audio-Systems.jpg",
    link: "/sherbimet/audio",
  },
];

export default function Services() {
  return (
    <>
      <ServicesHero />
      <section className="min-h-screen py-16 sm:py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-20 md:px-0">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}