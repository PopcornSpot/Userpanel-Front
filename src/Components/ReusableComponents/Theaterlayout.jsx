import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

const TheaterLayout = () => {
  const rows = [
    { label: "DIAMOND (Rs. 190)", range: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
    { label: "", range: ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"] },
    { label: "PEARL (Rs. 60)", range: ["V", "W"] },
  ];

  const seatsPerRow = 23;
  const seatData = rows.flatMap((section) =>
    section.range.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, seatIndex) => ({
        id: `${row}-${seatIndex + 1}`,
        row: row,
        section: section.label,
        number: seatIndex + 1,
        status: Math.random() < 0.2 ? "sold" : "available",
      }))
    )
  );

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  return (
    <div className="p-6 flex items-center justify-center flex-col bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="w-full fixed top-0">
        <NavBar />
      </div>

      {/* Theater Layout */}
      <div className="space-y-10 mt-20">
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
                          onClick={() => seat.status === "available" && toggleSeatSelection(seat.id)}
                          className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer border 
                            ${
                              seat.status === "sold"
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

      {/* Theater Screen */}
      <div className="mt-16 w-full flex items-center justify-center h-20">
        <div className="w-[90%] max-w-4xl h-8 bg-gray-800 text-white text-center flex items-center justify-center rounded-md shadow-md">
          Theater Screen
        </div>
      </div>

      {/* Seat Legend */}
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 border rounded flex items-center justify-center">
            <MdEventSeat size={14} />
          </div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 border rounded flex items-center justify-center text-white">
            <MdEventSeat size={14} />
          </div>
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500 border rounded flex items-center justify-center text-white">
            <MdEventSeat size={14} />
          </div>
          <span>Sold</span>
        </div>
      </div>

      {/* Selected Seats */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Selected Seats:</h2>
        <p className="text-lg">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button 
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Confirm Ticket
        </button>
        <button 
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          Cancel
        </button>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default TheaterLayout;
