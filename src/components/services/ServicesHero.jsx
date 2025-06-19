export default function ServicesHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 z-0 fade-in-20 max-w-full"
        style={{
          backgroundImage: "url('/ServicesPage/ServicesBanner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <h1 className="fade-up relative text-4xl sm:text-5xl font-extrabold z-10 text-blue-800 drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)] lg:-top-8">
        Shërbimet Tona
      </h1>

      <p className="fade-up relative mt-4 px-4 sm:px-0 max-w-xl text-base sm:text-xl z-10 text-gray-600 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:-top-8">
        Ne ofrojmë zgjidhje të besueshme për instalime elektrike, sisteme
        sigurie dhe shumë më tepër.
      </p>

      {/* Decorative SVG at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-[#e0e3e8]"
          d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z"
        />
      </svg>
    </section>
  );
}