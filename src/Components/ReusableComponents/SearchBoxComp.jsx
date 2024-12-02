import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";

const items = [
  "Vidhya",
  "Kamala",
  "Amaran",
  "Kanguva",
  "AM Theatre",
  "Pushpa 2",
  "Vettri",
  "Rohini",
  "Lucky Basker"
];





const SerachBar = ({ setSearchBarValue }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowDropdown(false);
    setSearchBarValue(false);
    console.log("Submitted ", query); 
  };

  const handleItemClick = (item) => {
    setQuery(item);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="w-screen h-screen absolute top-20 bg-[#181921] opacity-80 flex justify-center items-center"></div>
      <div className="absolute top-0 w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-[60%] sm:max-lg:w-[80%] max-sm:w-[90%] max-sm:px-4 min-h-20 rounded flex  bg-white justify-center items-center gap-4 px-10">
          <form 
          onSubmit={handleSubmit}
          className="w-full h-14 flex items-center justify-center">
            <input
              className="h-14 w-[80%] max-sm:w-[85%] outline-2 px-2 text-xl outline outline-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
            />
            <button
              type="submit"
              className="w-[20%] max-sm:w-[15%] bg-orange-400  h-full flex ring-2 ring-orange-400 justify-center items-center gap-3"
            >
              <ImSearch className="text-2xl font-bold text-black" />
              <span className="font-medium max-md:hidden text-xl">Search</span>
            </button>
          </form>
          <FaXmark
            onClick={() => setSearchBarValue(false)}
            className="text-3xl w-[5%] cursor-pointer"
          />
        </div>
        {showDropdown && query && (
          <ul className="w-[60%] sm:max-lg:w-[80%] max-sm:w-[90%]  mt-4 rounded-md  bg-white">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default SerachBar;
