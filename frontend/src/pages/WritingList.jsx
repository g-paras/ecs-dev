import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxios from "../hooks/useAxios";
import { WRITING_LIST } from "../utils/routes";

const DIFFICULTY = {
  E: "EASY",
  M: "MEDIUM",
  H: "HARD",
};

const WritingItem = ({ passage }) => {
  return (
    <div className="rounded-xl shadow flex flex-col bg-white">
      <img
        className="rounded-t-xl h-32 object-cover aspect-square"
        // src="https://cc-west-blog-assets.s3.amazonaws.com/uploads/2017/04/unique-writing-voice.png"
        // src="https://www.classcentral.com/report/wp-content/uploads/2022/02/Creative-Writing-Courses-Banner.png"
        // src="https://miro.medium.com/max/1024/1*InWKMq_BE8X10zcuYvQpzg.jpeg"
        // src="https://miro.medium.com/max/820/1*50Wr6m5YBRqyQ7gn73noKw.png"
        src="https://bit.ly/3RPjR3b"
        alt=""
      />
      <div className="p-4">
        <div>
          <span className="font-bold text-purple-500 tracking-wide">WRITING</span>{" "}
          <span className="font-bold text-slate-500"> • </span>
          <span id={DIFFICULTY[passage.difficulty].toLowerCase()}>
            {DIFFICULTY[passage.difficulty]}
          </span>
        </div>
        <h2 className="text-xl pt-3 font-sans whitespace-nowrap overflow-x-hidden">
          <Link to={`/writing-assessment/${passage.id}`}>{passage.title}</Link>
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

const WritingList = () => {
  const axios = useAxios();
  const [passages, setPassages] = useState([]);

  useEffect(() => {
    axios
      .get(WRITING_LIST)
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
        <WritingItem key={id} passage={passage} />
      ))}
    </div>
  );
};

export default WritingList;
