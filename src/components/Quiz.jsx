import React, { useState } from "react";
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
        optionText: "Lets Go",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Costliest Mobile Phone in the World",
    options: [
      {
        optionText: "Iphone",
        isCorrect: true,
      },
      {
        optionText: "Samsung Fold 3",
        isCorrect: false,
      },
      {
        optionText: "Nokia 4G",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which is the strongest phone in the world",
    options: [
      {
        optionText: "Samsung M3",
        isCorrect: false,
      },
      {
        optionText: "Google Pixel",
        isCorrect: false,
      },
      {
        optionText: "IQOO 4G Redmi",
        isCorrect: false,
      },
      {
        optionText: "Nokia 3310",
        isCorrect: true,
      },
    ],
  },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = () => {
    setIndex(index + 1);
  };

  return (
    <div className="quiz">
      <header className="quiz__header">
        <ExitToAppIcon className="header__exit" />
      </header>
      <div className="main">
        <div className="question">
          <h1 className="parti">{questions[index].question}</h1>
          <div className="options">
            {questions[index].options.map((option) => (
              <div onClick={handleIndex} className="option1 option">
                <h2>{option.optionText}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
