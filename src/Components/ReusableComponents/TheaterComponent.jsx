import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import image from "../../assets/LoginImagebg.jpg";

const TheaterBooking = () => {
  // Get current dates for today, tomorrow, and day after
  const getFormattedDate = (offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const dates = [
    { label: getFormattedDate(0), date: getFormattedDate(0) },
    { label: getFormattedDate(1), date: getFormattedDate(1) },
    { label: getFormattedDate(2), date: getFormattedDate(2) },
  ];

  const priceRanges = [
    { label: "₹0 - ₹100", value: "0-100" },
    { label: "₹200 - ₹300", value: "200-300" },
    { label: "₹300 - ₹400", value: "300-400" },
  ];

  const showtimes = [
    { time: "01:50 PM 4k DOLBY ATMOS", available: true },
    { time: "04:15 PM 4k DOLBY ATMOS", available: false },
    { time: "06:15 PM 4k DOLBY ATMOS", available: true },
    { time: "07:00 PM 4k DOLBY ATMOS", available: false },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectTime = (time) => {
    if (time.available) {
      setSelectedTime(time.time);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md space-y-6">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 w-full sm:w-[30%]">
          <img
            src={image}
            alt="Small Image"
            className="h-[300px] sm:h-[400px] w-full object-cover rounded-md shadow-md"
          />
        </div>
        <div className="flex-grow w-full sm:w-[70%] bg-cyan-300 rounded-md shadow-md">
          <img
            src={image}
            alt="Large Image"
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Theater Info */}
      <div>
        <div className="flex items-center gap-2">
          <IoMdHeartEmpty className="text-xl text-red-500" />
          <p className="font-bold text-lg">The Vijaya Park Multiplex</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <IoLocationOutline className="text-xl text-gray-600" />
          <p className="text-gray-700 text-sm">
            No.56, Anna Enclave, Injambakkam, Chennai, Tamil Nadu 600155, India
          </p>
        </div>
      </div>

      {/* Cinema Hall Button */}
      <div className="mt-4">
        <button className="p-2 rounded-full bg-gray-400 text-sm font-bold hover:bg-gray-500 text-white px-4">
          Cinema Hall
        </button>
      </div>

      {/* Date Selector and Price Range */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-6">
        {/* Date Selector */}
        <div className="flex flex-wrap gap-4">
          {dates.map((date, index) => (
            <button
              key={index}
              className={`p-2 bg-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-400 ${
                selectedDate === index && "bg-green-500 text-white"
              }`}
              onClick={() => setSelectedDate(index)}
            >
              {date.label}
            </button>
          ))}
        </div>

        {/* Price Range Selector */}
        <div className="relative">
          <select
            className="p-2 rounded-lg bg-gray-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
            value={selectedPriceRange || ""}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="" disabled>
              Select Price Range
            </option>
            {priceRanges.map((range, index) => (
              <option key={index} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4 border border-gray-300 rounded-md bg-white">
        <p className="font-bold">Pushpa 2: The Rule (UA)</p>
        <p className="text-sm text-gray-600">Tamil: 2D</p>
      </div>

      {/* Showtimes */}
      <div className="space-y-4">
        <p className="font-semibold">Select Show Time</p>
        <div className="flex gap-3 flex-wrap">
          {showtimes.map((time, index) => (
            <button
              key={index}
              className={`p-3 w-48 text-sm font-semibold rounded-md border-2 ${
                time.available
                  ? selectedTime === time.time
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-green-400"
                  : "bg-orange-500 text-white cursor-not-allowed"
              }`}
              onClick={() => handleSelectTime(time)}
              disabled={!time.available}
            >
              {time.time}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <p className="text-sm">Available</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <p className="text-sm">Booked</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <p className="text-sm">Selectable</p>
        </div>
      </div>
    </div>
  );
};

export default TheaterBooking;