import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, icon, image, link }) {
  return (
    <Link
      to={link}
      className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 flex flex-col lg:flex-row cursor-pointer pop-fade-in"
    >
      <div className="w-full lg:w-1/2 h-full lg:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col text-center justify-center w-full lg:w-1/2">
        <i
          style={{ fontSize: "1.5rem" }}
          className={`${icon} text-blue-800 mb-4`}
        ></i>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </Link>
  );
}