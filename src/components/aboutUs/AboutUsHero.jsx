export default function AboutUsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-50 fade-in-50"
        style={{
          backgroundImage: "url('/AboutUsPage/AboutUsBanner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <h1 className="fade-up relative text-5xl font-extrabold z-10 text-blue-800 drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)] lg:-top-8">
        Kush Jemi Ne
      </h1>

      <p className="fade-up relative mt-4 max-w-xl text-lg lg:text-xl z-10 text-gray-500 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:-top-8">
        Ekspertë në instalime elektrike, kamera monitorimi, sisteme sigurie dhe
        sisteme audio.
      </p>

      {/* Decorative SVG at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-gray-100"
          d="M737.9,94.7L0,0v100h1000V0L737.9,94.7z"
        />
      </svg>
    </section>
  );
}