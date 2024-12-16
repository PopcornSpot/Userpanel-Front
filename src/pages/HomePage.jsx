import Hero from "../Components/ReusableComponents/HeroSectionComp";
import NavBar from "../Components/ReusableComponents/NavbarComponent";
import MovieCarousel from "../Components/ReusableComponents/MovieCarouselComp";
import ViewAllMovie from "../Components/ReusableComponents/ViewAllMoviesComp";
import { useEffect, useState } from "react";
import Footer from "../Components/ReusableComponents/FooterComponent";
import axios from "axios";
import { toast } from "react-toastify";



const filterMoviesByDate = (movieData,setNewMovies,setUpcomingMovies) => {
  const today = new Date(); 

  const newMovies = movieData.filter(movie => new Date(movie.releaseDate) <= today);
  const upcomingMovies = movieData.filter(movie => new Date(movie.releaseDate) > today);
   setNewMovies(newMovies);
   setUpcomingMovies(upcomingMovies) 
};


const Home = () => {
  const [viewAll, setViewAll] = useState(false);
  let [movieData,setMovieData] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getAllMovies = async () => {
    try {
       await axios
        .get(`http://localhost:7000/movie/user/getallmovie`,
        )
        .then((res) => {
          toast.error(res.data.Error);
          const allMovies =res.data.findAllMovies
          console.log(res.data.findAllMovies);
          
          const filteredMovies = allMovies.filter((movies) => movies.status == "Published");
          console.log(filteredMovies);
          
          setMovieData(filteredMovies)
        })
        .catch((err) => {
          toast.error(err.response.data.Message)
        });
    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    if(movieData.length!==0){
      filterMoviesByDate(movieData,setNewMovies,setUpcomingMovies)
    }
    else{
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
            <MovieCarousel movieData={newMovies} />
          ) : (
            <ViewAllMovie movieData={newMovies} />
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
            <MovieCarousel movieData={upcomingMovies} />
          ) : (
            <ViewAllMovie movieData={upcomingMovies} />
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
