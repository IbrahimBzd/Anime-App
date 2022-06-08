import React, { useEffect, useState } from "react";

const Popular = () => {
  const [state, setState] = useState([]);
  const base_url = "https://api.jikan.moe/v3";

  const fetchgintama = async () => {
    const dragonballData = await fetch(
      `${base_url}/search/anime?q=dragonball&page=1`
    ).then((res) => res.json());
    const gintamaData = await fetch(
      `${base_url}/search/anime?q=gintama&page=1`
    ).then((res) => res.json());
    const narutoData = await fetch(
      `${base_url}/search/anime?q=naruto&page=1`
    ).then((res) => res.json());
    const onepieceData = await fetch(
      `${base_url}/search/anime?q=onepiece&page=1`
    ).then((res) => res.json());
    const fullmetalData = await fetch(
      `${base_url}/search/anime?q=fullmetal&page=1`
    ).then((res) => res.json());
    const hellsingData = await fetch(
      `${base_url}/search/anime?q=hellsing&page=1`
    ).then((res) => res.json());

    const dragonball = [...dragonballData.results].slice(0, 7);
    const naruto = [...narutoData.results].slice(0, 5);
    const onepiece = [...onepieceData.results].slice(0, 7);
    const hellsing = [...hellsingData.results].slice(0, 5);
    const fullmetal = [...fullmetalData.results].slice(0, 3);
    const gintama = [...gintamaData.results].slice(0, 5);

    setState([
      ...dragonball,
      ...naruto,
      ...onepiece,
      ...hellsing,
      ...fullmetal,
      ...gintama,
    ]);
  };

  useEffect(() => {
    fetchgintama();
  }, []);

  return (
    <div className="w-full h-auto p-3 text-[#EAEAEA]">
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {state.map((elem) => {
          return (
            <div
              key={elem.mal_id}
              className="text-center flex flex-col items-center"
            >
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
                  {elem.title}{" "}
                </p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
