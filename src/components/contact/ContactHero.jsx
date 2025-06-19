export default function ContactHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-18 sm:py-31 overflow-hidden">
      {/* Background for small to medium screens */}
      <div
        className="absolute inset-0 z-0 fade-in-30 block xl:hidden"
        style={{
          backgroundImage: "url('/ContactPage/Contact-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Background for large screens and up */}
      <div
        className="absolute inset-0 z-0 fade-in-30 hidden xl:block"
        style={{
          backgroundImage: "url('/ContactPage/Contact-banner-XL.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <h1 className="fade-up relative text-4xl sm:text-5xl font-extrabold z-10 text-blue-800 drop-shadow-[0_1px_5px_rgba(0,0,0,0.25)] lg:-top-8">
        Na Kontaktoni
      </h1>

      <p className="fade-up relative mt-4 px-4 sm:px-0 max-w-xl text-base lg:text-xl z-10 text-gray-600 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] lg:-top-8">
        Jemi këtu për t'ju ndihmuar. Na shkruani ose na telefononi!
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