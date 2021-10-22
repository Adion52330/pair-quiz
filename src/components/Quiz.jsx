import React, { useState } from "react";
import "./Quiz.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Button from "@mui/material/Button";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { TextField } from "@mui/material";
import db from "../firebase";

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
  // Modal Styling
  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    width: 400,
    bgcolor: "#34495e",
    border: "2px solid #000",
    p: 2,
    px: 4,
    pb: 3,
    color: "white",
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  // Hooks related to the project
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = index + 1;
    if (nextQuestion < questions.length) {
      setIndex(nextQuestion);
    } else {
      setCompleted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      score: score,
    };
    db.collection("scores").add(data);
    setOpen(false);
  };

  return (
    <div className="quiz">
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <center
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              color="error"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Button variant="contained" color="error" onClick={handleSubmit}>
              Save
            </Button>
          </center>
        </Box>
      </StyledModal>
      <header className="quiz__header">
        <ExitToAppIcon className="header__exit" />
      </header>
      <div className="main">
        <div className="question">
          {completed ? (
            <>
              <h1 className="partii">
                Congratulations, You scored {score} out of {questions.length}
              </h1>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpen(true)}
              >
                Save
              </Button>
            </>
          ) : (
            <>
              <h1 className="parti">{questions[index].question}</h1>
              <div className="options">
                {questions[index].options.map((option) => (
                  <div
                    onClick={() => handleAnswerClick(option.isCorrect)}
                    className="option1 option"
                  >
                    <h2>{option.optionText}</h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
