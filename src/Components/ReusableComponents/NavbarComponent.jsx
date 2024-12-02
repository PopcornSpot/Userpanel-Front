
import React, { useState } from "react";
import { FaCircleUser, FaRegHeart, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBarComp";
import SerachBar from "./SearchBoxComp";

const NavBar = () => {
  const location = useLocation();

  const menuList = [
    { page: "Home", path: "/home" },
    { page: "Movies", path: "/movies" },
    { page: "Theater", path: "/theater" },
    { page: "My Tickets", path: "/mytickets" },
    { page: "Insights", path: "/insights" },
  ];

  const [searchBarValue, setSearchBarValue] = useState(false);
  const [burgerValue, setBurgerValue] = useState(false);

  return (
    <nav className="fixed z-20">
      <div className="w-screen min-h-20 flex bg-[#181921] items-center justify-between">
        <div className="max-w-[300px] px-6 min-h-20 flex items-center justify-start">
          <img src="" alt="" />
        </div>

        <div className="max-w-[60%] min-h-20 max-lg:hidden font-medium flex justify-center items-center gap-6">
          {menuList.map((value, index) => (
            <Link key={index} to={value.path}>
              <span
                className={`px-2 w-full min-h-20 pt-2 pb-7 font-medium ${
                  value.path === location.pathname
                    ? "text-orange-400 border-b-[3px] border-solid border-b-orange-500"
                    : "text-white"
                } 
                hover:rounded-none hover:border-solid hover:border-b-[3px]  transition hover:duration-500 hover:ease-linear hover:border-b-white`}
              >
                {value.page}
              </span>
            </Link>
          ))}
        </div>

        <div className="min-w-[100px] h-full pr-10 flex justify-end items-center gap-5">
          <Link>
            <ImSearch
              onClick={() => setSearchBarValue(true)}
              className="max-lg:hidden text-2xl font-bold text-white hover:-translate-y-0.5 transition"
            />
          </Link>
          <Link>
            <FaRegHeart className="max-lg:hidden text-2xl text-white hover:-translate-y-0.5 transition" />
          </Link>
          <Link>
            <FaCircleUser className="max-lg:hidden text-2xl text-white hover:-translate-y-0.5 transition" />
          </Link>
          <GiHamburgerMenu
            onClick={()=>setBurgerValue(true)}
            className="lg:hidden font-bold text-2xl text-white"
          />
        </div>
      </div>
      {searchBarValue && 
      <SerachBar setSearchBarValue={setSearchBarValue} />
      }
     {burgerValue && 
     <SideBar setBurgerValue={setBurgerValue} menuList={menuList} location={location} setSearchBarValue={setSearchBarValue} />
     }

    </nav>
  );
};

export default NavBar;
