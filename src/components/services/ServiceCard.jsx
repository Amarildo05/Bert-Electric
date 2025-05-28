import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, icon, image, link }) {
  return (
    <Link
      to={link}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 flex flex-col md:flex-row cursor-pointer"
    >
      <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-8 flex flex-col justify-center md:w-1/2">
        <i className={`${icon} text-5xl text-blue-800 mb-4`}></i>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}