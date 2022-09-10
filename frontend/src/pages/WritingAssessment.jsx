import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { WRITING_LIST } from "../utils/routes";
import useAxios from "../hooks/useAxios";

const WritingAssessment = () => {
  const { id } = useParams();
  const axios = useAxios();

  const [task, setTask] = useState({});

  useEffect(() => {
    axios
      .get(`${WRITING_LIST}${id}/`)
      .then((res) => {
        setTask(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-2xl font-semibold">{task?.content}</h1>
      <textarea
        className="mt-10 p-4 text-lg w-full rounded border-slate-600 border focus:outline-none focus:ring-offset-1 focus:ring focus:ring-slate-500"
        name="submission"
        id="submission"
        cols="30"
        rows="10"
      >
        {/* asd */}
      </textarea>
      <button className="block mx-auto px-5 py-2 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 mt-4 focus:ring focus:ring-offset-1 focus:ring-slate-500 focus:outline-none">
        Submit
      </button>
    </div>
  );
};

export default WritingAssessment;
