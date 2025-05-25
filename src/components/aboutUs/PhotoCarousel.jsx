import { Carousel } from "primereact/carousel";

const carouselImages = [
  "/Store/Store1.jpg",
  "/Store/Store2.jpg",
  "/Store/Store3.jpg",
  "/Store/Store4.jpg",
  "/Store/Store5.jpg",
  "/Store/Store6.jpg",
  "/Store/Store7.jpg",
  "/Store/Store8.jpg",
  "/Store/Store9.jpg",
  "/Store/Store10.jpg",
  "/Store/Store11.jpg",
];

export default function PhotoCarousel() {
  const carouselItemTemplate = (image) => (
    <img
      src={image}
      alt="Store photo"
      className="w-full h-full object-cover p-3.5"
      loading="lazy"
    />
  );

  return (
    <section className="max-w-6xl mx-auto mb-20">
      <Carousel
        value={carouselImages}
        itemTemplate={carouselItemTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
        className="custom-carousel"
        circular
        autoplayInterval={4000}
        showIndicators={false}
        showNavigators={true}
      />
    </section>
  );
}