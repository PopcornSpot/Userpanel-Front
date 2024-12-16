import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent"

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
      ticketStatus: "pending..",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">

      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>


      <div className="pt-24 pl-10">
        <h1 className="text-3xl font-bold  mb-4">
          My Tickets
        </h1>
      </div>


      <div className="container mx-auto px-6 py-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-row"
          >

            <img
              src={ticket.movieImage}
              alt={ticket.movieName}
              className="w-1/3 object-cover h-auto"
            />


            <div className="p-6 flex flex-col justify-center gap-3 w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800">
                {ticket.movieName}
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">Date & Time:</span> {ticket.dateTime}
              </p>
              <p
                className={`text-sm ${ticket.ticketStatus === "Booked" ? "text-green-600" : "text-red-600"
                  }`}
              >
                <span className="font-medium">Status:</span> {ticket.ticketStatus}
              </p>

            
              <Link to={`/tickets/${ticket.id}`}>
                <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                  View Ticket
                </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
      <div>
        <Footer/>
      </div>

    </div>
  );
};

export default MyTickets;
