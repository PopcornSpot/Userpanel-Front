
import React, { useEffect, useState } from "react";
import { MdEventSeat } from "react-icons/md";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";

const TheaterLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [shows, setShows] = useState({});
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const movieId = params.get("movieId");
  const showId = params.get("showId");
  const selectedDate = params.get("selectedDate");
  const showTime = decodeURIComponent(params.get("showTime"));

  const secretKey = "asdfgh,wertyop67890.,[];09ASDFGHJK"; 

  const fetchShows = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7000/show/user/getshowfortheatrelayout/?_id=${showId}`
      );
      setShows(res.data.shows);
    } catch (error) {
      toast.error("Error fetching showtimes.");
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  const rows = [
    { label: `DIAMOND (${shows.firstClassPrice})`, range: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
    { label: "", range: ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"] },
    { label: `PEARL (${shows.secondClassPrice})`, range: ["V", "W"] },
  ];

  const seatsPerRow = 23;
  const seatData = rows.flatMap((section) =>
    section.range.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, seatIndex) => ({
        id: `${row}-${seatIndex + 1}`,
        row: row,
        section: section.label,
        number: seatIndex + 1,
        status: bookedSeats.includes(`${row}-${seatIndex + 1}`) ? "sold" : "available",
      }))
    )
  );

  const getSeatPrice = (seatId) => {
    const row = seatId.split("-")[0];
    const firstClassPrice = Number(shows.firstClassPrice);
    const secondClassPrice = Number(shows.secondClassPrice);

    if (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"].includes(row))
      return firstClassPrice;
    if (["V", "W"].includes(row)) return secondClassPrice;
    return firstClassPrice;
  };

  const calculateTotalCost = () => {
    return selectedSeats.reduce((total, seatId) => total + getSeatPrice(seatId), 0);
  };

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };


    // useEffect(() => {
  //   const fetchBookedSeats = async () => {
  //     try {
  //       const response = await axios.get("/api/booked-seats");
  //       if (response.data.success) {
  //         setBookedSeats(response.data.bookedSeats);
  //       } else {
  //         console.error("Failed to fetch booked seats");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching booked seats:", error);
  //     }
  //   };
  
  //   // fetchBookedSeats();
  // }, []);

  const handleReset = () => {
    setSelectedSeats([]);
  };


  const encryptedTotalCost = CryptoJS.AES.encrypt(
    JSON.stringify(calculateTotalCost()),
    secretKey
  ).toString();

  return (
    <div className="flex items-center justify-center flex-col bg-gray-100 min-h-screen">
      <div className="w-full fixed top-0 z-50">
        <NavBar />
      </div>

      <div className="space-y-10 mt-24">
        {rows.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 underline decoration-gray-500">
              {section.label}
            </h2>
            <div className="overflow-x-auto">
              {section.range.map((row) => (
                <div key={row} className="flex items-center mb-4">
                  <div className="w-8 text-center font-bold text-gray-700">{row}</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {seatData
                      .filter((seat) => seat.row === row)
                      .map((seat) => (
                        <div
                          key={seat.id}
                          onClick={() =>
                            seat.status === "available" && toggleSeatSelection(seat.id)
                          }
                          className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer border 
                            ${seat.status === "sold"
                              ? "bg-red-500 text-white cursor-not-allowed"
                              : selectedSeats.includes(seat.id)
                              ? "bg-green-500 text-white"
                              : "bg-gray-300 hover:bg-gray-200"
                            } 
                            ${seat.number === 4 || seat.number === 19 ? "ml-16" : ""}`}
                          title={`Row ${seat.row}, Seat ${seat.number}`}
                        >
                          <MdEventSeat size={20} />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full flex items-center justify-center h-20">
        <div className="w-[90%] max-w-4xl h-8 bg-gray-800 text-white text-center flex items-center justify-center rounded-md shadow-md">
          Theater Screen
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          to={`/payment?movieId=${movieId}&showId=${showId}&selectedSeats=${encodeURIComponent(
            selectedSeats.join(",")
          )}&encryptedTotalCost=${encodeURIComponent(encryptedTotalCost)}&showTime=${encodeURIComponent(showTime)}&selectedDate=${selectedDate}`}
        >
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
            Continue
          </button>
        </Link>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default TheaterLayout;
