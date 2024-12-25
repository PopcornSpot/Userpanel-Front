import { Outlet } from "react-router-dom";
import NavBar from "./NavbarComponent";

const NestedMovies = () => (
  <>
    <header>
      <NavBar />
    </header>
    <div>
      <Outlet />
    </div>
  </>
);

export default NestedMovies;
