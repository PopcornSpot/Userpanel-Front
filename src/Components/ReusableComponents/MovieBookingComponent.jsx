import React from "react";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

const MovieBooking = () => {
  const movieData = {
    title: "Pushpa 2: The Rule (Tamil)",
    genre: ["Action", "Thriller"],
    dates: ["TUE 17 DEC", "WED 18 DEC", "THU 19 DEC", "FRI 20 DEC", "SAT 21 DEC"],
    language: "Tamil - 2D",
    theaters: [
      {
        name: "The Vijay Park Multiplex: Injambakkam ECR 4K Atmos",
        showTimes: ["07:50 PM", "10:00 PM"],
        features: ["4K DOLBY ATMOS", "Non-cancellable"],
        discount: "5% off for Superstars",
      },
      {
        name: "PVR: Sathyam, Royapettah",
        showTimes: ["06:10 PM", "10:00 PM"],
        features: ["Cancellation Available", "Food & Beverage"],
      },
      {
        name: "PVR: Escape-Express, Avenue Mall",
        showTimes: ["06:25 PM", "10:50 PM"],
        features: ["Cancellation Available", "Food & Beverage"],
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="w-full fixed top-0 z-50 shadow-md bg-white">
        <NavBar />
      </div>

      {/* Page Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {movieData.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {movieData.genre.map((g, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 bg-gray-200 text-gray-700 font-medium rounded-full shadow-sm"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Date Selector */}
          <div className="flex flex-wrap gap-3 mb-10">
            {movieData.dates.map((date, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm
                  ${
                    index === 0
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white"
                  }`}
              >
                {date}
              </button>
            ))}
          </div>

          {/* Theater List */}
          <div className="space-y-8">
            {movieData.theaters.map((theater, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300"
              >
                {/* Theater Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {theater.name}
                </h2>

                {/* Discount */}
                {theater.discount && (
                  <p className="text-sm text-red-500 font-medium mb-2">
                    {theater.discount}
                  </p>
                )}

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {theater.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 font-medium rounded-md text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Showtimes */}
                <div className="flex flex-wrap gap-4">
                  {theater.showTimes.map((time, idx) => (
                    <button
                      key={idx}
                      className="px-5 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MovieBooking;
