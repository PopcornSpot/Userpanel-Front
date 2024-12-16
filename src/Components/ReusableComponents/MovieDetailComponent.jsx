import React from "react";
import NavBar from "./NavbarComponent";
import Footer from "./FooterComponent";

const PersonCard = ({ image, name, role }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={`Photo of ${name}, a ${role}`}
      loading="lazy"
      className="w-24 aspect-square rounded-full object-cover mb-3 hover:scale-105 transition-transform duration-300"
    />
    <p className="font-semibold text-sm text-center">{name}</p>
    <p className="text-xs text-gray-500 text-center">{role}</p>
  </div>
);

const MovieDetailComponent = () => {
  const cast = [
    { id: 1, name: "Ajith Kumar", role: "Actor", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Arjun", role: "Actor", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Thrisha", role: "Actor", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Delli Babu", role: "Actor", image: "https://via.placeholder.com/100" },
  ];

  const crew = [
    { id: 1, name: "Makizh Thirumeni", role: "Director", image: "https://via.placeholder.com/100" },
    { id: 2, name: "LYCA", role: "Producer", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Aniruth Ravichander", role: "Musician", image: "https://via.placeholder.com/100" },
    { id: 4, name: "K.G. Venkatesh", role: "Cinematographer", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Dinesh Ponraj", role: "Editor", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center">
      <div className="w-full sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden h-auto w-full">
          <div className="w-full lg:w-1/3 flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQboFYtw-OBMj7dz5jl3sLhYFsDu5i_9Utg&s"
              alt="Pushpa 2 Movie Poster"
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-2/3 p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex flex-col justify-between gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">Pushpa 2</h1>
              <div className="flex items-center gap-3 text-lg mb-4">
                <span className="text-yellow-400 text-2xl font-bold">★ 7.5/10</span>
                <span className="text-gray-300">(67 Votes)</span>
              </div>
              <p className="text-lg tracking-wide text-gray-300 mb-2">2D • Tamil, Telugu</p>
              <p className="text-lg tracking-wide text-gray-300">2h 8m • Comedy, Romantic • U • 13 Dec, 2024</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Movie</h2>
              <p className="leading-relaxed text-gray-300 text-lg tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi nostrum placeat architecto. Non unde ex illum enim vel placeat debitis nulla, aut dicta explicabo fugit voluptatum laborum itaque sit.
              </p>
            </div>
            <button 
              className="w-[200px] bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 self-start cursor-pointer" 
              aria-label="Book tickets for Pushpa 2"
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-4 decoration-gray-500 hover:decoration-orange-500 transition-all">
          Cast
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {cast.map((person) => (
            <PersonCard key={person.id} image={person.image} name={person.name} role={person.role} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-4 decoration-gray-500 hover:decoration-orange-500 transition-all">
          Crew
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {crew.map((person) => (
            <PersonCard key={person.id} image={person.image} name={person.name} role={person.role} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetailComponent;
