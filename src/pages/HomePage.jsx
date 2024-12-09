import Hero from "../Components/ReusableComponents/HeroSectionComp";
import NavBar from "../Components/ReusableComponents/NavbarComponent";
import MovieCarousel from "../Components/ReusableComponents/MovieCarouselComp";
import ViewAllMovie from "../Components/ReusableComponents/ViewAllMoviesComp";
import { useState } from "react";
import Footer from "../Components/ReusableComponents/FooterComponent";
const movieData = [
  {
    image:
      "https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg",
    movieName: "Amaran",
    certificate: "UA",
    languages: "Tamil",
    ratings: "9.2/10",
    views: "12.3k",
  },
  {
    image:
      "https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg",
    movieName: "Amaran",
    certificate: "UA",
    languages: "Tamil",
    ratings: "9.2/10",
    views: "12.3k",
  },
  {
    image:
      "https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg",
    movieName: "Amaran",
    certificate: "UA",
    languages: "Tamil",
    ratings: "9.2/10",
    views: "12.3k",
  },
  {
    image:
      "https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg",
    movieName: "Amaran",
    certificate: "UA",
    languages: "Tamil",
    ratings: "9.2/10",
    views: "12.3k",
  },
  {
    image:
      "https://www.wallsnapy.com/img_gallery/latest-amaran-sk-movie-wallpaper-1200px-548339.jpg",
    movieName: "Amaran",
    certificate: "UA",
    languages: "Tamil",
    ratings: "9.2/10",
    views: "12.3k",
  },
];

const Home = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="relative top-20">
        <Hero />


        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Suggestion Movies
            {viewAll == false ? (
              <span
                onClick={() => setViewAll(true)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View All
              </span>
            ) : (
              <span
                onClick={() => setViewAll(false)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View Less
              </span>
            )}
          </div>
          {viewAll == false ? (
            <MovieCarousel movieData={movieData} />
          ) : (
            <ViewAllMovie movieData={movieData} />
          )}
        </section>



        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Latest Movies
            {viewAll == false ? (
              <span
                onClick={() => setViewAll(true)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View All
              </span>
            ) : (
              <span
                onClick={() => setViewAll(false)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View Less
              </span>
            )}
          </div>
          {viewAll == false ? (
            <MovieCarousel movieData={movieData} />
          ) : (
            <ViewAllMovie movieData={movieData} />
          )}
        </section>


        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Upcoming Movies
            {viewAll == false ? (
              <span
                onClick={() => setViewAll(true)}
                className="cursor-pointer text-orange-400 text-lg font-medium hover:text-orange-500"
              >
                View All
              </span>
            ) : (
              <span
                onClick={() => setViewAll(false)}
                className="cursor-pointer text-orange-400 text-lg font-medium hover:text-orange-500"
              >
                View Less
              </span>
            )}
          </div>
          {viewAll == false ? (
            <MovieCarousel movieData={movieData} />
          ) : (
            <ViewAllMovie movieData={movieData} />
          )}
        </section>
        <footer className="mt-12 px-2">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Home;
