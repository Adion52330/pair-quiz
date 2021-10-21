import React from "react";
import "./Quiz.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const questions = [
  {
    question: "Largest Building in the world",
    options: [
      {
        optionText: "Leaning tower of Pisa",
        isCorrect: false,
        color: "#ECA82C",
      },
      {
        optionText: "Burj Khalifa",
        isCorrect: true,
        color: "#2C9CA6",
      },
      {
        optionText: "Eifel Tower",
        isCorrect: false,
        color: "#D4546A",
      },
      {
        optionText: "Staue of liberty",
        isCorrect: false,
        color: "#2F74BD",
      },
    ],
  },
  {
    question: "Most famous book in the world",
    options: [
      {
        optionText: "Percy Jackson",
        isCorrect: false,
      },
      {
        optionText: "Harry Potter",
        isCorrect: true,
      },
      {
        optionText: "Gulliver's Travel",
        isCorrect: false,
      },
      {
        optionText: "Les Go",
        isCorrect: false,
      },
    ],
  },
];

const Quiz = () => {
  return (
    <div className="quiz">
      <header className="quiz__header">
        <ExitToAppIcon className="header__exit" />
      </header>
      <div className="main">
        <div className="question">
          <h1 className="parti">{questions[0].question}</h1>
          <div className="options">
            {questions[0].options.map((option) => (
              <div className="option1 option">
                <h1>{option.optionText}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
