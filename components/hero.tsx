import Image from "next/image";
import { HeroImages } from "../assets/images";
import { AutoScrollCarousel } from "./(reusable)/autoscrollcarousel";
import { HorizontalLine } from "./(reusable)/horizontalline";

const Hero = () => {
  const images = HeroImages.map((image) => image.image);

  return (
    <section className="relative bg-orange-100">
      <div className="relative center flex p-4 min-h-[80vh]">
        <div className="relative">
          <h2 className="md:text-6xl text-4xl z-20 text-black/40">
            FABRIC THAT <br /> SPEAKS
          </h2>
          <HorizontalLine className="absolute left-0" />
        </div>
        <span className="absolute left-12 bottom-12 font-caligraphic">
          LOVELY APPAREL
        </span>
        <Image
          className="absolute rounded-[30%] md:right-[10%] sm:top-auto top-[10%] right-0 shadow-md z-10 shrink-0 scale-75 lg:scale-100"
          src="/hero-pic-2.png"
          alt="hero-pic"
          width={440}
          height={860}
        />
      </div>
      <span className="absolute lg:block hidden bottom-[50%] left-[27%] text-xl font-bold italic text-white">
        NEW NEW NEW
      </span>
      <AutoScrollCarousel
        className="absolute pl-8 bottom-[10%]"
        images={images}
      />
    </section>
  );
};

export default Hero;
