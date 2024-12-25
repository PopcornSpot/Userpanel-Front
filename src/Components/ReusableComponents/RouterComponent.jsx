import { Route, Routes } from "react-router-dom";
import Login from "../../pages/LoginPage";
import Home from "../../pages/HomePage";
import NotFoundPage from "./PageNotFound";
import MyTickets from "../ReusableComponents/MyTicket"
import TheaterCard from "../../pages/TheatrePage";
import Kollywood from "../../pages/Kollywoodpage";
import Tollywood from "../../pages/TollywoodPage";
import Mollywood from "../../pages/MollyWoodPage";
import MovieDetailComponent from "./MovieDetailComponent";
import TheaterLayout from "./Theaterlayout";
import RegisterFormPage from "../../pages/RegisterPage";
import ForgotPassword from "../../pages/ResetPassword";
import UserProfile from "./ProfilePageComponent";
import RazorpayComponent from "../RazorpayComponent";
import TheaterBooking from "./TheaterBooking";
import MovieBooking from "./MovieBookingComponent";
import AboutPage from "./AboutPage";
import TermsAndConditions from "./TermsandConditionPage";
import PrivateRoute from "./PrivateRouteComp";
import TicketConfirmation from "../../pages/TicketConfirmationPage";




const ParentRouter = () => {
    return (
    
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFoundPage/>} />
          <Route index element={<Home/>}/>
          <Route path="/theatre" element={<TheaterCard/>}/>
          <Route path="/movies/kollywood" element={<Kollywood/>}/>
          <Route path="/movies/tollywood" element={<Tollywood/>}/>
          <Route path="/movies/mollywood" element={<Mollywood/>}/>
          <Route path="/moviedetail/:_id" element={<MovieDetailComponent/>}/>
          <Route path="/theatrelayout" element={<TheaterLayout/>}/>
          <Route path="/theatrebooking/:_id" element={<TheaterBooking/>}/>
          <Route path="/moviebooking/:_id" element={<MovieBooking/>}/>
          <Route path="/payment" element={<RazorpayComponent/>}/>
          <Route path="/register" element={<RegisterFormPage/>}/>
          <Route path="/resetpassword" element={<ForgotPassword/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/termsandcondition" element={<TermsAndConditions/>}/>
          <Route path="/confirmation" element={<TicketConfirmation/>}/>



          <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/mytickets" element={<MyTickets/>}/>
          </Route>

        </Routes>
        
        
    );
  };
  
  export default ParentRouter;