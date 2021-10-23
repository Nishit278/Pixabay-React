// import logo from './logo.svg';
// import "./App.css";
import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState(() => localStorage.theme === "dark");

  const toggleDarkMode = () => {
    setMode(!mode);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
        );
        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
        console.log(data);
        const html = window.document.documentElement;
        const prevTheme = mode ? "light" : "dark";
        html.classList.remove(prevTheme);
        const nextTheme = mode ? "dark" : "light";
        html.classList.add(nextTheme);
        localStorage.setItem("theme", nextTheme);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search, mode]);

  return (
    <div
      className={` ${
        mode === true ? `dark` : ``
      }relative container-screen bg-white dark:bg-gray-800`}
    >
      <Brightness4Icon
        className="absolute z-50 right-10 top-5 text-4xl dark:text-white"
        onClick={toggleDarkMode}
      />
      <ImageSearch searchText={(text) => setSearch(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">Found Nothing</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
