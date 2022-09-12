import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

import { LISTENING_DETAIL } from "../utils/routes";

const ListeningAssessment = () => {
  const [started, setStarted] = useState(false);
  const [testData, setTestData] = useState();
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`${LISTENING_DETAIL}${id}/`)
      .then((res) => {
        setTestData(res.data);
        setAudio(new Audio(res.data.audio_src));
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const [audio, setAudio] = useState();

  const playAudio = () => {
    if (!audio) {
      alert("something went wrong");
    } else if (audio.played.length === 0) {
      audio.play();
      setCount((prev) => prev - 1);
    } else if (audio.ended) {
      audio.play();
    }
  };

  const startTest = () => {
    if (audio && !audio.ended) alert("wait until audio is played");
    else setStarted(true);
  };

  return (
    <div className="container mx-auto">
      {!started && (
        <div className="text-center">
          <button
            className="px-3 py-2 bg-indigo-500 text-white rounded mr-2"
            onClick={playAudio}
            disabled={count <= 0}
          >
            Play Audio
          </button>
          <button
            className="px-3 py-2 bg-green-500 text-white rounded"
            onClick={startTest}
            disabled={count > 0}
          >
            Start Test
          </button>
        </div>
      )}
      {testData && started && (
        <div className="pb-10">
          {testData?.questions?.map((question, id) => (
            <div className="sm:mt-5 md:mt-10 lg:w-1/2 mx-auto">
              <p className="font-semibold text-lg">
                Q{id + 1}
                {" - "}
                {question.question}
              </p>
              <fieldset>
                <div className="my-4 gap-y-3 grid grid-cols-1">
                  {question?.options?.map((option) => (
                    <div key={option.id}>
                      <input
                        className="hidden"
                        type="radio"
                        name={`question-${question?.id}`}
                        id={option?.id}
                      />
                      <label htmlFor={option?.id}>{option?.value}</label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
          <div>
            <button className="block mx-auto px-5 py-2 rounded bg-slate-700 text-white font-semibold hover:bg-slate-600 mt-4 focus:ring focus:ring-offset-1 focus:ring-slate-500 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListeningAssessment;
