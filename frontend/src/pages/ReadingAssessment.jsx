import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ReadingData0 from "../data/reading/1";
import ReadingData1 from "../data/reading/2";
import ReadingData2 from "../data/reading/3";
import ReadingData3 from "../data/reading/4";

const ReadingData = [ReadingData0, ReadingData1, ReadingData2, ReadingData3][
  Math.floor(Math.random() * 4)
];

const ReadingAssessment = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [selected, setSelected] = useState();
  const [submitted, setSubmitted] = useState();
  const [finalSubmit, setFinalSubmit] = useState(false);

  useEffect(() => {
    setSelected();
    setSubmitted();
  }, [questionNum]);

  const handleClick = (e) => {
    // if (questionNum + 1 < ReadingData.questions.length)
    setQuestionNum((questionNum + 1) % ReadingData.questions.length);
  };

  const submitAnswer = (e) => {
    setSubmitted(selected);
    setSelected();
  };

  return (
    <div className="pt-10">
      {!finalSubmit && (
        <div className="container mx-auto grid grid-cols-2">
          <div className="bg-slate-200">
            <p className="sm:p-5 md:p-10 text-lg tracking-wide">
              {ReadingData?.paragraph}
            </p>
          </div>
          <div className="bg-slate-300">
            <div className="sm:p-5 md:p-10">
              <p className="font-semibold text-lg">
                Q{ReadingData?.questions[questionNum].id}
                {" - "}
                {ReadingData?.questions[questionNum].question}
              </p>
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
                    <label
                      htmlFor={option?.id}
                      id={
                        submitted != null &&
                        (option.id === submitted
                          ? option.id ===
                            ReadingData?.questions[questionNum].answer
                            ? "correct-answer"
                            : "incorrect-answer"
                          : option?.id ===
                            ReadingData?.questions[questionNum].answer
                          ? "correct-answer"
                          : "")
                      }
                    >
                      {option?.value}
                    </label>
                  </div>
                ))}
              </div>
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
