import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCardComp";

const MovieCarousel = ({movieData}) => {

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleCount(5); 
      else if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + visibleCount >= movieData.length
        ? movieData.length - visibleCount
        : prevIndex + visibleCount
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - visibleCount < 0 ? 0 : prevIndex - visibleCount
    );
  };

  const visibleCards = movieData.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative flex items-center">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`px-2 py-2 max-sm:-mr-8 z-10 bg-gray-600 text-white rounded-full ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
        }`}
      >
        <MdKeyboardArrowLeft className="text-3xl"/>
      </button>

      <div className="flex overflow-hidden flex-grow pt-3">
        {visibleCards.map((value, index) => (
          <Link key={index} className="flex-none px-2" style={{ width: `${100 / visibleCount}%` }}>
            <MovieCard data={value} />
          </Link>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={startIndex + visibleCount >= movieData.length}
        className={`px-2 py-2 max-sm:-ml-8 z-10 bg-gray-600 text-white rounded-full ${
          startIndex + visibleCount >= movieData.length
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
      >
         <MdKeyboardArrowRight className="text-3xl"/>
      </button>
    </div>

  );
};


export default MovieCarousel;
