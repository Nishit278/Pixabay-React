import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="relative  max-w-screen rounder overflow-hidden mx-auto ">
      <form onSubmit={onSubmit} className=" max-w-sm mx-auto">
        <div className="flex items-center border-b-2 border-sky-500 py-2 my-10 w-2xl">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search.."
            className="apprearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            tpye="submit"
            className="flex-shrink-0 rounded bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
