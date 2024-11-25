// import HeroSection from "./HeroSectionComponent";
// import { Navbar } from "../ReusableComponents/NavbarComponent";
import MovieCard from "../ReusableComponents/CardComponent";
import NavBar from "../ReusableComponents/NavbarComponent";
// import NavBarcomp from "../ReusableComponents/NavBarComponent2";
import HeroSection from "./HeroSectionComp";

const Home = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="relative top-20">
        <HeroSection/>
      </main>
      <footer className="w-full h-full p-28">
       <MovieCard/>
      </footer>
    </>
  );
};

export default Home;
