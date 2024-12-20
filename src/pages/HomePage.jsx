import Hero from "../Components/ReusableComponents/HeroSectionComp";
import NavBar from "../Components/ReusableComponents/NavbarComponent";
import MovieCarousel from "../Components/ReusableComponents/MovieCarouselComp";
import ViewAllMovie from "../Components/ReusableComponents/ViewAllMoviesComp";
import { useEffect, useState } from "react";
import Footer from "../Components/ReusableComponents/FooterComponent";
import axios from "axios";
import { toast } from "react-toastify";

const filterMoviesByDate = (movieData, setNewMovies, setUpcomingMovies) => {
  const today = new Date();

  const newMovies = movieData.filter((movie) => new Date(movie.releaseDate) <= today);
  const upcomingMovies = movieData.filter((movie) => new Date(movie.releaseDate) > today);
  setNewMovies(newMovies);
  setUpcomingMovies(upcomingMovies);
};

const Home = () => {
  const [suggestionViewAll, setSuggestionViewAll] = useState(false);
  const [latestViewAll, setLatestViewAll] = useState(false);
  const [upcomingViewAll, setUpcomingViewAll] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/movie/user/getallmovie`);
      const allMovies = res.data.findAllMovies;

      const filteredMovies = allMovies.filter((movie) => movie.status === "Published");
      setMovieData(filteredMovies);
    } catch (error) {
      toast.error(error.response?.data?.Message || "Error fetching movies");
    }
  };

  useEffect(() => {
    if (movieData.length !== 0) {
      filterMoviesByDate(movieData, setNewMovies, setUpcomingMovies);
    } else {
      getAllMovies();
    }
  }, [movieData]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="relative top-20">
        <Hero />

        {/* Suggestion Movies Section */}
        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Suggestion Movies
            {suggestionViewAll ? (
              <span
                onClick={() => setSuggestionViewAll(false)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View Less
              </span>
            ) : (
              <span
                onClick={() => setSuggestionViewAll(true)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View All
              </span>
            )}
          </div>
          {suggestionViewAll ? (
            <ViewAllMovie movieData={movieData} />
          ) : (
            <MovieCarousel movieData={movieData} />
          )}
        </section>

        {/* Latest Movies Section */}
        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Latest Movies
            {latestViewAll ? (
              <span
                onClick={() => setLatestViewAll(false)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View Less
              </span>
            ) : (
              <span
                onClick={() => setLatestViewAll(true)}
                className="cursor-pointer text-orange-400 text-base font-medium hover:text-orange-500"
              >
                View All
              </span>
            )}
          </div>
          {latestViewAll ? (
            <ViewAllMovie movieData={newMovies} />
          ) : (
            <MovieCarousel movieData={newMovies} />
          )}
        </section>

        {/* Upcoming Movies Section */}
        <section className="mt-12 px-2">
          <div className="w-full py-4 px-14 max-sm:px-4 text-3xl max-sm:text-xl font-semibold flex justify-between items-end">
            Upcoming Movies
            {upcomingViewAll ? (
              <span
                onClick={() => setUpcomingViewAll(false)}
                className="cursor-pointer text-orange-400 text-lg font-medium hover:text-orange-500"
              >
                View Less
              </span>
            ) : (
              <span
                onClick={() => setUpcomingViewAll(true)}
                className="cursor-pointer text-orange-400 text-lg font-medium hover:text-orange-500"
              >
                View All
              </span>
            )}
          </div>
          {upcomingViewAll ? (
            <ViewAllMovie movieData={upcomingMovies} />
          ) : (
            <MovieCarousel movieData={upcomingMovies} />
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
