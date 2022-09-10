import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { READING_DETAIL } from "../utils/routes";

const ReadingAssessment = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [selected, setSelected] = useState();
  const [submitted, setSubmitted] = useState();
  const [finalSubmit, setFinalSubmit] = useState(false);
  const [ReadingData, setReadingData] = useState();

  const { id } = useParams();
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`${READING_DETAIL}${id}/`)
      .then((res) => {
        setReadingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setSelected();
    setSubmitted();
  }, [questionNum]);

  const handleClick = (e) => {
    setQuestionNum((questionNum + 1) % ReadingData.questions.length);
  };

  const submitAnswer = (e) => {
    setSubmitted(selected);
  };

  return (
    <div className="pt-10">
      {ReadingData && !finalSubmit && (
        <div className="container mx-auto grid grid-cols-2">
          <div className="bg-slate-200">
            <p className="sm:p-5 md:p-10 text-lg tracking-wide">
              {ReadingData?.content}
            </p>
          </div>
          <div className="bg-slate-300">
            <div className="sm:p-5 md:p-10">
              <p className="font-semibold text-lg">
                Q{questionNum + 1}
                {" - "}
                {ReadingData?.questions[questionNum].question}
              </p>
              <fieldset disabled={submitted}>
                <div className="my-4 gap-y-3 grid grid-cols-1">
                  {ReadingData?.questions[questionNum]?.options?.map((option) => (
                    <div key={option.id}>
                      <input
                        className="hidden"
                        type="radio"
                        name={`question-${ReadingData?.questions[questionNum]?.id}`}
                        id={option?.id}
                        checked={selected === option.id}
                        onChange={() => setSelected(option.id)}
                      />
                      <label htmlFor={option?.id}>{option?.value}</label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="flex flex-row-reverse">
                {!submitted && (
                  <button
                    className="px-4 py-2 bg-blue-500 rounded font-bold text-white"
                    onClick={submitAnswer}
                    disabled={!selected}
                  >
                    Submit
                  </button>
                )}
                {submitted && questionNum < 4 && (
                  <button
                    className="px-4 py-2 bg-blue-500 rounded font-bold text-white"
                    onClick={handleClick}
                  >
                    Next &rarr;
                  </button>
                )}
                {submitted && questionNum === 4 && (
                  <button
                    className="px-4 py-2 bg-blue-500 rounded font-bold text-white"
                    onClick={() => setFinalSubmit(true)}
                  >
                    Final Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {finalSubmit && (
        <p>
          Test submitted, You can now go to <Link to="/">home</Link>
        </p>
      )}
    </div>
  );
};

export default ReadingAssessment;
