import { MdEmail } from "react-icons/md";
import LoginImage from "../assets/LoginImagebg.jpg"
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
  picture:"",
  userName:"",
};


const Login =()=>{
 
  const [formData, setFormData] = useState(initialState);
  console.log(formData);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:7000/su/login", formData)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("adminId",res.data.findEmail._id)
          toast.success(res.data.Message);
          setFormData(initialState);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  };



  const handleLoginSuccess = async(credentialResponse) => {
    const token = credentialResponse.credential;
    const user = jwtDecode(token);
    const data= {...formData, userName:user.name,email:user.email,picture:user.picture };

    try {
      console.log("tryyyy");
      
      await axios
        .post("http://localhost:7000/user/googlelogin", data)
        .then((res) => {
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("userId",res.data.savedUser._id)
          console.log(res.data.savedUser);
          toast.success(res.data.Message);
          setFormData(initialState);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };


  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };




return(

<div className={`w-full h-screen flex items-center justify-center bg-gray-50`}>
<div className="w-[60%] sm:max-lg:w-[45%] lg:max-xl:[50%] xl:max-2xl: h-full max-sm:hidden">
<img
className="w-full h-full object-cover"
src={LoginImage} alt="" />
</div>  
<div className="w-[40%] sm:max-lg:w-[55%] lg:max-xl:[50%] h-screen flex flex-col items-center bg-gray-50 justify-center gap-6">
  
    <h1 className="text-3xl font-semibold">PopcornSpot</h1>
    <form 
    onSubmit={handleOnSubmit} onReset={handleReset}
    action=""
    className="w-[350px] h-[420px] rounded-lg flex flex-col justify-center items-center gap-6">
      
        <h2 className="w-full text-xl font-semibold text-center mb-2">Welcome</h2>
         <div className="w-[90%]">
        <GoogleLogin
          text="continue_with"
          logo_alignment="left"
          size="large"
          theme="filled_black"
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
      <div className="w-[90%] border hover:border-blue-200 px-4 flex justify-center items-center bg-white rounded gap-3">
        <MdEmail className="text-red-500 text-xl"/>
        <input 
         name="email"
         type="email"
         value={formData.email}
         onChange={handleOnChange}
        className="w-full h-11 outline-none text-base "
        placeholder="Email"
        required
         />
      </div>


      <div className="w-[90%] px-4 border hover:border-blue-200  flex justify-center items-center bg-white rounded gap-3">
        <RiLockPasswordFill className="text-red-500 text-xl"/>
        <input
         type="password"
         name="password"
         value={formData.password}
         onChange={handleOnChange} 
        className="w-full h-11 outline-none text-base"
        placeholder="Password"
        required
       />
      </div>

      <button
      className="w-[90%] h-12 text-lg font-semibold bg-orange-400 rounded-lg hover:bg-orange-500 ">
        Login
      </button>
     


      
      <div className="w-[90%] flex justify-between px-1">
      <Link 
      className=""
      to={"/register"}>
      <p className="block text-right  hover:text-orange-400">SignUp</p>
      </Link>
      <Link 
      className=""
      to={"/resetpassword"}>
      <p className="block text-right hover:text-orange-400">Forgot Password</p>
      </Link>
      </div>
    </form>
    <section>
    
    <div className="flex justify-center items-center bg-gray-100">
      
    </div>

           
    
    </section>
</div>    
</div>

)}

export default Login;