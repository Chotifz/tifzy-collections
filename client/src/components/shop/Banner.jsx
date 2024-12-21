import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Banner({ slides, currentSlide, setCurrentSlide }) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <img
          src={slide}
          key={index}
          className={`${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700`}
        />
      ))}
      <Button
        onClick={() =>
          setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
          )
        }
        variant="outline "
        size="icons"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronLeftIcon className="w-5 h-5 m-1.5" />
      </Button>
      <Button
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }
        variant="outline "
        size="icons"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronRightIcon className="w-5 h-5 m-1.5" />
      </Button>
    </div>
  );
}
