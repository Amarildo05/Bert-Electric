const logos = ["/logos/brand1.png", "/logos/brand2.png", "/logos/brand3.png"];

export default function ExclusiveProducts() {
  const productLogoTemplate = (logo) => (
    <img
      src={logo}
      alt="Brand Logo"
      className="h-16 object-contain mx-4"
      loading="lazy"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mb-20 text-center bg-gray-100">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Produktet Ekskluzive
      </h3>
      <p className="mb-8 text-lg text-gray-500">
        Ne bashkëpunim me markat më të mira
      </p>
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