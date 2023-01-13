"use client";

import { useEffect, useRef } from "react";

export const AutoScrollCarousel = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const activeIllustation = useRef(0);

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextIllustation, 3500);
  };

  useEffect(() => {
    scheduleTimeout();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToIllustation = (index: number) => {
    clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;
    wrapperRef.current
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"));

    const image = wrapperRef.current.querySelector<HTMLImageElement>(
      `img:nth-child(${index})`
    );

    if (!image) return;

    wrapperRef.current
      .querySelector(`[data-index="${index}"]`)
      ?.classList.add("active");

    wrapperRef.current.scrollTo({
      left: image.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    activeIllustation.current = index;
    scheduleTimeout();
  };

  const goToNextIllustation = () => {
    goToIllustation((activeIllustation.current + 1) % images.length);
  };

  return (
    <div
      className={`my-7 hidden min-h-[4rem] w-full overflow-hidden md:block ${className}`}
    >
      <div
        ref={wrapperRef}
        className="flex carouselref scroll- items-center min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
      >
        {images.map((image, idx) => (
          <img
            className={`shrink-0 snap-center max-w-[10rem] max-h-[8rem]`}
            key={idx}
            data-index={idx}
            src={image}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
};
