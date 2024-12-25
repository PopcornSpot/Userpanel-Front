import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./LoaderComponent";
import ticketImage from "../../assets/ticket-Image.jpg"

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const backendURL = "http://localhost:7000";
const navigate = useNavigate();
  const fetchTicket = async () => {
    try {
      const res = await axios.get(
        `http://localhost:7000/payment/user/getalltickets`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
      if(res.data.status=="401"){
       navigate("/login")
      }
      const ticketData = res.data.tickets;
      const ticketsWithMovies = await Promise.all(
        ticketData.map(async (ticket) => {
          const movieDetails = await fetchMovies(ticket.movieId);
          return { ...ticket, movieDetails };
        })
      );
      setTickets(ticketsWithMovies);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchMovies = async (movieId) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/movie/user/getMovieDetails/?_id=${movieId}`
      );
      return res.data.movie;
    } catch (error) {
      toast.error("Error fetching movie details.");
      return null; 
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
     {tickets.length!==0?(
      <>
      <div className="mt-20 relative mb-10 w-full h-56 bg-gray-300">
       <img
       className="object-cover h-56 w-full"
       src={ticketImage} alt="" />
       <div className="w-full h-56 bg-gray-950 flex justify-center items-center bg-opacity-50 absolute top-0">
        <h1
        className="text-3xl font-bold text-white"
        >My Tickets</h1>
       </div>
      </div>

      <div className="container mx-auto px-6 py-6 mb-8 grid gap-12  lg:grid-cols-2  xl:grid-cols-3 ">
        {tickets.map((ticket) => (
          <div
            key={ticket._id}
            className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-row"
          >
            <img
              src={`${backendURL}/upload/${ticket.movieDetails.fileName}` || " "}
              alt={ticket.movieDetails.title || "Movie"}
              className="w-48 object-cover h-auto"
            />

            <div className="p-6 flex flex-col justify-center gap-3 w-2/3">
              <h3 className="text-2xl font-semibold text-gray-800">
                {ticket.movieDetails.title || "Unknown Movie"}
              </h3>
              <p className="text-gray-600 flex">
                <span className="font-medium w-12 block ">Date :</span> {ticket.showDate}
              </p>
              <p className="text-gray-600 flex">
                <span className="font-medium w-12 block">Time :</span> {ticket.showTime}
              </p>
              <p
                className={`text-sm ${
                  ticket.bookingStatus === "Confirmed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <span className="font-medium">Status:</span> {ticket.bookingStatus}
              </p>
              <Link to={`/confirmation?bookingDetails=${ticket._id}&movieId=${ticket.movieId}`}>
                <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                  View Ticket
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </>)
      :
      <Loader/>
}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyTickets;
