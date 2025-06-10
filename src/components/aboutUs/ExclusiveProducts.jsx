import { logos } from "../../data/about/ExclusiveProductsData";

export default function ExclusiveProducts() {
  const productLogoTemplate = (logo) => (
    <img
      src={logo}
      alt="Brand Logo"
      className=" w-32 lg:w-48 object-contain mx-4"
      loading="lazy"
    />
  );

  return (
    <section className="py-16 px-8 mb-16 text-center bg-gray-100">
      <h3 className="mb-8 text-base md:text-lg text-gray-500">
        Ne bashkëpunim me markat më të mira në treg
      </h3>
      <div className="flex justify-center flex-wrap items-center gap-8">
        {logos.map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            {productLogoTemplate(logo)}
          </div>
        ))}
      </div>
    </section>
  );
}