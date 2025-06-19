import { Link } from "react-router-dom";

export default function HomepageHero() {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto lg:flex-row sm:px-6 p-4">
      <div className="flex items-center py-5 lg:w-1/2 lg:pb-10 lg:pt-10 lg:pr-4 slide-fade-in">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            BERT <span className="text-blue-800">ELECTRIC</span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-4 md:text-xl md:max-w-3xl">
            Ekspertë në instalime elektrike, kamera monitorimi, sisteme sigurie
            dhe sisteme audio. Ofrojmë vetëm cilësi të lartë me produkte
            ekskluzive nga{" "}
            <span className="font-semibold text-gray-700">Dahua</span>,{" "}
            <span className="font-semibold text-gray-700">Ezviz</span>, dhe{" "}
            <span className="font-semibold text-gray-700">Hikvision</span>.
          </p>
          <div className="mt-5 md:mt-6">
            <Link
              to="/rreth-nesh"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3 text-base font-medium text-white transition duration-150 ease-in-out bg-blue-800 rounded-md hover:bg-blue-700 shadow hover:scale-106"
            >
              Mëso më shumë
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center py-5 md:w-2/3 md:pb-20 md:pt-10 md:pl-10 pop-fade-in">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img
              src="./Homepage/HomeHero.jpeg"
              alt="Bert Electric"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}