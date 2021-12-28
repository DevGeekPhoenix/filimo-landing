import { useEffect, useState } from "react";

const SpecialFilms = () => {
  const [SpecialFilms, setSpecialFilms] = useState(null);

  useEffect(() => {
    fetch(" https://www.namava.ir/api/v1.0/post-groups/1263/medias?pi=1&ps=20")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSpecialFilms(data);
      });
  }, []);

  if (!SpecialFilms) return <h1> loading </h1>;
  return (
    <div className="h-auto  bg-[#151515]">
      <h1 className="pt-10 pr-10 text-white">ویژه</h1>

      {SpecialFilms.result.map(({ imageUrl, caption }, i) => {
        return (
          <div className="inline-block  mr-12">
            <img
              alt="img"
              className="rounded-lg  h-72  mt-10 "
              src={`https://www.namava.ir/${imageUrl}`}
            />
            <p className="text-white text-xs mt-5">{caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialFilms;
