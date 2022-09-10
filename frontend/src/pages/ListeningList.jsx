import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxios from "../hooks/useAxios";
import { LISTENING_LIST } from "../utils/routes";

const DIFFICULTY = {
  E: "EASY",
  M: "MEDIUM",
  H: "HARD",
};

const ListeningItem = ({ passage }) => {
  return (
    <div className="rounded-xl shadow flex flex-col bg-white">
      <img
        className="rounded-t-xl h-32 object-cover aspect-square"
        src="https://blog.vantagecircle.com/content/images/2020/06/importance-of-active-listening.png"
        alt=""
      />
      <div className="p-4">
        <div>
          <span className="font-bold text-purple-500 tracking-wide">
            LISTENING
          </span>{" "}
          <span className="font-bold text-slate-500"> • </span>
          <span id={DIFFICULTY[passage.difficulty].toLowerCase()}>
            {DIFFICULTY[passage.difficulty]}
          </span>
        </div>
        <h2 className="text-xl pt-3 font-sans whitespace-nowrap overflow-x-hidden">
          <Link to={`/listening-assessment/${passage.id}`}>{passage.title}</Link>
        </h2>
        <div className="pt-3">
          <span className="px-2 py-1 bg-red-100 text-red-600 rounded font-semibold text-sm">
            Incomplete
          </span>
        </div>
      </div>
    </div>
  );
};

const ListeningList = () => {
  const axios = useAxios();
  const [passages, setPassages] = useState([]);

  useEffect(() => {
    axios
      .get(LISTENING_LIST)
      .then((res) => {
        setPassages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {passages.map((passage, id) => (
        <ListeningItem key={id} passage={passage} />
      ))}
    </div>
  );
};

export default ListeningList;
