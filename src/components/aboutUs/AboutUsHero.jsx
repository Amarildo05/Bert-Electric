export default function AboutUsHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-36 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url(/AboutUsPage/AboutUsBanner.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <h1 className="relative text-5xl font-extrabold z-10 drop-shadow-lg text-gray-800">
        Kush Jemi Ne
      </h1>
      <p className="relative mt-4 max-w-xl text-lg z-10 drop-shadow text-gray-500">
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