import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="relative  max-w-screen overflow-hidden mx-auto ">
      <form onSubmit={onSubmit} className=" max-w-lg mx-auto">
        <div className="flex items-center rounded-full border-2 border-sky-500 shadow-lg py-2 px-2 my-10 w-xl ">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search.."
            className="apprearance-none bg-transparent  w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none dark:text-gray-200"
          />
          <button
            tpye="submit"
            className="flex-shrink-0 rounded-full bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-sm border-4 text-white px-2 py-2"
          >
            <SearchIcon className="text-sm"></SearchIcon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
