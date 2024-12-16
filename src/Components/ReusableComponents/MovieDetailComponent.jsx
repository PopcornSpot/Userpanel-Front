import React from "react";

const MovieDetailComponent = () => {
    const cast = [
        { id: 1, name: "Ajith Kumar", role: "Actor", image: "https://via.placeholder.com/100" },
        { id: 2, name: "Arjun", role: "Actor", image: "https://via.placeholder.com/100" },
        { id: 3, name: "Thrisha", role: "Actor", image: "https://via.placeholder.com/100" },
        { id: 4, name: "Delii Babu", role: "Actor", image: "https://via.placeholder.com/100" },
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
            {/* Movie Details Section */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden ">
                    {/* Movie Poster */}
                    <div className="w-full lg:w-1/3 h-[500px]">
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyNDEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-ucsdecvrpf-portrait.jpg"
                            alt="Pushpa 2"
                            className="w-full h-full "
                        />
                    </div>

                    {/* Movie Details */}
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
                        <button className="w-[200px] bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 self-start">
                            Book Tickets
                        </button>
                    </div>
                </div>
            </div>

            {/* Cast Section */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-gray-500">Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cast.map((person) => (
                        <div
                            key={person.id}
                            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 rounded-full object-cover mb-3 hover:scale-105 transition-transform duration-300"
                            />
                            <p className="font-semibold text-sm text-center">{person.name}</p>
                            <p className="text-xs text-gray-500 text-center">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Crew Section */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-gray-500">Crew</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {crew.map((person) => (
                        <div
                            key={person.id}
                            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 rounded-full object-cover mb-3 hover:scale-105 transition-transform duration-300"
                            />
                            <p className="font-semibold text-sm text-center">{person.name}</p>
                            <p className="text-xs text-gray-500 text-center">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailComponent;
