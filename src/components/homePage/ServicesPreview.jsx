import { Link } from "react-router-dom";

const services = [
  {
    title: "Instalime Elektrike",
    description:
      "Projektim dhe zbatim të kabinave elektrike, instalimeve shtëpiake dhe industriale.",
    icon: "pi pi-bolt",
    link: "/sherbimet/instalime-elektrike",
  },
  {
    title: "Sisteme Monitorimi/Kamera",
    description:
      "Instalim profesional i kamerave për shtëpi, biznese dhe hapësira publike.",
    icon: "pi pi-video",
    link: "/sherbimet/kamera",
  },
  {
    title: "Sisteme Alarmi",
    description:
      "Sisteme alarmi kundër vjedhjes dhe zjarrit për siguri maksimale.",
    icon: "pi pi-shield",
    link: "/sherbimet/alarmi",
  },
  {
    title: "Sisteme Audio",
    description:
      "Zgjidhje për audio të brendshme, njoftime publike dhe sisteme zëri.",
    icon: "pi pi-volume-up",
    link: "/sherbimet/audio",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Shërbimet</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50"
            >
              <i
                style={{ fontSize: "1.5rem" }}
                className={`${service.icon} text-blue-800 mb-4`}
              ></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}