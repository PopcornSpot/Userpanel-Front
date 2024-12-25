import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




 
const Hero = () => {
  const images = [
    "https://www.wallsnapy.com/img_gallery/new-amaran-film-stills-200px-wallpapers-6512299.jpg",
    "https://etvbharatimages.akamaized.net/etvbharat/prod-images/02-02-2024/1200-675-20652249-102-20652249-1706883023264.jpg",
    "https://cdn.gulte.com/wp-content/uploads/2023/09/everything-you-need-to-know-about-pushpa-2.jpg",
    "https://wallpapercave.com/wp/wp12590417.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);


  return (
   <section className="w-full h-[90vh] bg-gray-100 max-sm:h-[450px]  flex justify-center items-center">
     <div className="relative w-full h-full overflow-hidden rounded-b-lg">
      <div
  className="absolute inset-0 w-auto h-auto bg-cover bg-center bg-no-repeat sm:bg-fixed max-sm:bg-top max-sm:bg-cover transition-all duration-500"
  style={{
    backgroundImage: `url(${images[currentIndex]})`,
  }}
></div>

     <div className="w-full h-full bg-black absolute top-0 bg-opacity-65 flex flex-col justify-center items-start px-20 max-sm:px-5">
          <h1 className="text-2xl font-extrabold sm:text-5xl text-white">
          The big screen awaits 
            <br/>
            <strong className="mt-4 font-extrabold text-orange-400 sm:block">
            Grab your tickets now!
            </strong>
          </h1>
            <Link to={"/about"}>
            <span
              className="block w-full rounded bg-orange-400 mt-4 px-8 py-3 font-semibold text-white shadow focus:outline-none focus:ring sm:w-auto hover:bg-orange-500 transition"
            >
              Learn More
            </span>
            </Link>
     </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-400" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
   </section>
  );
};





export default Hero;