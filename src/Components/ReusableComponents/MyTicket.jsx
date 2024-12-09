import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavbarComponent";

const MyTickets = () => {
  const tickets = [
    {
      id: 1,
      movieImage:
        "https://m.media-amazon.com/images/M/MV5BM2E1MjU1YjEtNmJkMi00N2ZhLTlmNTItM2YwYmZlZTIxNzljXkEyXkFqcGdeQXVyMTQ4MTg3Njcx._V1_FMjpg_UX1000_.jpg",
      movieName: "Amaran",
      dateTime: "2024-12-05, 7:30 PM",
      ticketStatus: "Booked",
    },
    {
      id: 2,
      movieImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFATsenf3axqsp8QZIjOn9LiXSPkSs5n8dfA&s",
      movieName: "Vidaamuyarchi",
      dateTime: "2024-12-06, 5:00 PM",
      ticketStatus: "Booked",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <NavBar />
      <div className="py-10 text-start px-">
        <h1 className="text-4xl font-bold text-gray-800 mt-12">My Tickets</h1>
        
      </div>
      <div className="container mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white shadow-md rounded-lg flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Movie Image */}
            <img
              src={ticket.movieImage}
              alt={ticket.movieName}
              className="w-full sm:w-40 h-40 sm:h-auto object-cover"
            />
            {/* Ticket Details */}
            <div className="p-4 flex flex-col items-start justify-center gap-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {ticket.movieName}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Date & Time:</span> {ticket.dateTime}
              </p>
              <p
                className={`mt-2 text-sm ${ticket.ticketStatus === "Booked"
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                <span className="font-medium">Status:</span> {ticket.ticketStatus}
              </p>
              
                <Link to={`/tickets/${ticket.id}`}>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                    View Ticket
                  </button>
                </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
