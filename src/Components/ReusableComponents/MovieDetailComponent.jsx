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

            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">

                    <div className="w-full lg:w-1/3 h-[500px]">
                        <img
                            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyNDEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00356724-ucsdecvrpf-portrait.jpg"
                            alt="Miss You"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>


                    <div className="w-full lg:w-2/3 p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Miss You</h1>
                        <div className="flex items-center gap-3 text-lg mb-4">
                            <span className="text-yellow-400 text-2xl font-semibold">★ 7.5/10</span>
                            <span>(67 Votes)</span>
                        </div>
                        <p className="mb-4 text-lg tracking-wide">2D • Tamil, Telugu</p>
                        <p className="mb-4 text-lg tracking-wide">2h 8m • Comedy, Romantic • U • 13 Dec, 2024</p>
                        <button className="w-[200px] bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                            Book Tickets
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-6 py-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 underline decoration-gray-500">About the Movie</h2>
                <p className="text-gray-700 leading-relaxed text-lg tracking-wide">
                    "Miss You" is a lighthearted romantic comedy featuring Siddharth and Ashika Ranganath in lead roles.
                    The movie is set to deliver a mix of humor, romance, and heartfelt moments that will captivate
                    audiences. Directed by N Rajasekhar, this Tamil-Telugu bilingual is packed with entertainment.
                </p>
            </div>

            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-gray-500">Cast</h2>
                <div className="flex flex-wrap justify-start gap-8">
                    {cast.map((person) => (
                        <div
                            key={person.id}
                            className="flex flex-col items-center p-6 rounded-full w-40 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 rounded-full object-cover shadow-md mb-3 hover:scale-110 transition-transform duration-300"
                            />
                            <p className="font-semibold text-sm">{person.name}</p>
                            <p className="text-sm text-gray-500">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 underline decoration-gray-500">Crew</h2>
                <div className="flex flex-wrap justify-start gap-8">
                    {crew.map((person) => (
                        <div
                            key={person.id}
                            className="flex flex-col items-center p-6 rounded-full w-40 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 rounded-full object-cover shadow-md mb-3 hover:scale-110 transition-transform duration-300"
                            />
                            <p className="font-semibold text-sm">{person.name}</p>
                            <p className="text-sm text-gray-500">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailComponent;
