import { Route, Routes } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Home from "../../pages/HomePage";
import NotFoundPage from "./PageNotFound";
// import AddMovieForm from "../../pages/MovieAddingPage";
// import MovieFormDemo from "../../pages/ExampleForm";
// import MovieList from "../../pages/ExampleForm";
// import SearchBox from "./SearchBoxComp";
// import SearchBox2 from "./SearchBoxComp";


const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/home" element={<Home/>}/>
          <Route index element={<Login/>}/>
        </Routes>
        
    );
  };
  
  export default ParentRouter;