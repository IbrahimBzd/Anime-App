import React, { useState } from "react";
import Outputs from "../outputs/Outputs";

const Home = () => {
  const [state, setState] = useState([]);
  const [value, setValue] = useState();
  const base_url = "https://api.jikan.moe/v3";

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // data fetching https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10

  async function fetchAnimes() {
    let response = await fetch(`${base_url}/search/anime?q=${value}&order_by=title&sort=asc&limit=50`)
    let json = await response.json()
    return json ;
  }

  const getAnimeList = async () => {
    try {
    let json = await fetchAnimes()
    console.log(json)
    setState(json.results)
    }catch (err) {
      console.error(err)
    }
  };

  return (
    <div className="w-full text-center h-auto p-3 text-[#EAEAEA]">
      <h1 className=" font-bold font-sans mt-3 mb-5 md:mt-5 md:mb-7 text-2xl sm:text-4xl md:text-5xl">
        {" "}
        Search your anime{" "}
      </h1>
      <div className="wfull flex justify-center">
        <div className="py-3 text-[0.7rem] pb-8 w-4/5 lg:text-base lg:w-1/2 ">
          <input
            name="search"
            id="search"
            className="py-3 px-1 md:px-4 rounded w-4/5 text-black"
            onChange={handleInput}
          />
          <button
            className={`bg-[#FF2E63] transition-shadow hover:shadow-lg hover:shadow-[#ff809f]
             rounded text-white py-3 px-1 md:px-4 w-1/5`}
            onClick={getAnimeList}
          >
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
        {<Outputs state={state}/>}
    </div>
  );
};

export default Home;
