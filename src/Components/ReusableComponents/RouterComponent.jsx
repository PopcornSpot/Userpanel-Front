import { Route, Routes } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Home from "../../pages/HomePage";
import NotFoundPage from "./PageNotFound";
import MyTickets from "../ReusableComponents/MyTicket"
import TicketPage from "./ViewMyTicket";
import TheaterCard from "../../pages/TheatrePage";
import Kollywood from "../../pages/Kollywoodpage";
import Tollywood from "../../pages/TollywoodPage";
import Mollywood from "../../pages/MollyWoodPage";
import MovieDetailComponent from "./MovieDetailComponent";
import TheaterLayout from "./Theaterlayout";
import RegisterFormPage from "../../pages/RegisterPage";
import ForgotPassword from "../../pages/ResetPassword";
// import RegisterForm from "../../pages/RegisterPage";
// import AddMovieForm from "../../pages/MovieAddingPage";
// import MovieFormDemo from "../../pages/ExampleForm";
// import MovieList from "../../pages/ExampleForm";
// import SearchBox from "./SearchBoxComp";
// import SearchBox2 from "./SearchBoxComp";


const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFoundPage/>} />
          <Route index element={<Home/>}/>
          <Route path="/mytickets" element={<MyTickets/>}/>
          <Route path="/tickets" element={<TicketPage/>}/>
          <Route path="/theatre" element={<TheaterCard/>}/>
          <Route path="/movies/kollywood" element={<Kollywood/>}/>
          <Route path="/movies/tollywood" element={<Tollywood/>}/>
          <Route path="/movies/mollywood" element={<Mollywood/>}/>
          <Route path="/moviedetail" element={<MovieDetailComponent/>}/>
          <Route path="/theaterlayout" element={<TheaterLayout/>}/>
          <Route path="/register" element={<RegisterFormPage/>}/>
          <Route path="/resetpassword" element={<ForgotPassword/>}/>
        </Routes>
        
        
    );
  };
  
  export default ParentRouter;