import ServiceCard from "../components/services/ServiceCard";
import ServicesHero from "../components/services/ServicesHero";

const services = [
  {
    title: "Instalime Elektrike",
    description:
      "Projektim dhe zbatim të kabinave elektrike, instalimeve shtëpiake dhe industriale.",
    icon: "pi pi-bolt",
    image: "/images/instalime-elektrike.jpg",
    link: "/sherbimet/instalime-elektrike",
  },
  {
    title: "Sisteme Monitorimi/Kamera",
    description:
      "Instalim profesional i kamerave për shtëpi, biznese dhe hapësira publike.",
    icon: "pi pi-video",
    image: "/images/kamera.jpg",
    link: "/sherbimet/kamera",
  },
  {
    title: "Sisteme Alarmi",
    description:
      "Sisteme alarmi kundër vjedhjes dhe zjarrit për siguri maksimale.",
    icon: "pi pi-shield",
    image: "/images/alarmi.jpg",
    link: "/sherbimet/alarmi",
  },
  {
    title: "Sisteme Audio",
    description:
      "Zgjidhje për audio të brendshme, njoftime publike dhe sisteme zëri.",
    icon: "pi pi-volume-up",
    image: "/images/audio.jpg",
    link: "/sherbimet/audio",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gray-100 pt-36 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <ServicesHero />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}