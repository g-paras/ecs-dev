import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import { LISTENING_DETAIL } from "../utils/routes";

const ListeningAssessment = () => {
  const { id } = useParams();
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`${LISTENING_DETAIL}${id}/`)
      .then((res) => {
        setAudio(new Audio(res.data.audio_src));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const [audio, setAudio] = useState();

  return (
    <>
      <button
        className="px-3 py-2 bg-indigo-500 rounded mx-2"
        onClick={() => audio.play()}
      >
        Play
      </button>
      <button
        className="px-3 py-2 bg-indigo-500 rounded mx-2"
        onClick={() => audio.pause()}
      >
        Pause
      </button>
    </>
  );
};

export default ListeningAssessment;
