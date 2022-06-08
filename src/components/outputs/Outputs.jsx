import React from "react";

const Outputs = ({ state }) => {
  return (
    <ul className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {state.map((elem) => {
        return (
          <li
            key={elem.mal_id}
            className="text-center flex flex-col items-center"
          >
            <a href={elem.url} target="_blank" rel="noreferrer">
              <section className="h-full w-full text-center flex flex-col items-center sec">
                <div className="relative overflow-hidden  rounded-xl ">
                  <img
                    className="shadow-lg shadow-gray-500"
                    src={elem.image_url}
                    alt="//"
                  />
                  <i
                    className={`absolute bottom-0 font-sans left-0 
                    max-h-[50%] text-[0.75rem] sm:text-base 
                    sm:font-bold sm:top-1/2 sm:bottom-auto 
                    sm:-translate-y-1/2`}
                    title={elem.synopsis}
                  >
                    {" "}
                    {elem.synopsis}{" "}
                  </i>
                </div>
                <p
                  className="font-medium font-sans text-lg overflow-hidden "
                  title={elem.synopsis}
                >
                  {" "}
                  {elem.title}
                </p>
                <p>{elem.score} 🌟</p>
                
              </section>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Outputs;
