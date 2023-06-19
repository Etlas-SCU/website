import React, { useState } from "react";
import style from "./QandA.module.css";
import { Box, Skeleton } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import hint from "../../images/Pngs/Hint.png";

export default function QandA() {
  const { title } = useParams();
  const [currQ, setCurrQ] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  const {statusQ, statusScore, setStatusScore, categories } =
    useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setStatusScore(0);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleCorrectAnswer = (answer) => {
    setSelectedChoice(answer.answer);
    setClicked(true);
    if (currQ === statusQ.length - 1 || answer.iscorrect === "false") {
      setTimeout(() => {
        setQuizFinished(true);
        setClicked(false);
      }, 1500);
    }
    if (answer.iscorrect === "true") {
      setStatusScore(statusScore + 1);
    }
    setTimeout(() => {
      setCurrQ(currQ + 1);
      setClicked(false);
    }, 1500);
  };

  // const handleHint=()=>{
  //   const filteredAnswers = Answers.filter((answer) => answer.isCorrect || filteredAnswers.length < 2);
  //   setAnswers(filteredAnswers);
  // }

  const SC = () => {
    if (title === "Statues") {
      return <p> {categories[0].score}</p>;
    } else if (title === "Monuments") {
      return <p> {categories[1].score}</p>;
    } else {
      return <p> {categories[2].score}</p>;
    }
  };

  return (
    <Box p="120px 0" height="100%">
      <Box className={style.title}>
        <h2>{title}</h2>
      </Box>
      {quizFinished ? (
        <Box className={style.finish}>
          <Box className={style.score}>
            <h1>{SC()}</h1>
            <p>Is your total score</p>
          </Box>
          <Link to="/knowledge">
            <button>play again</button>
          </Link>
        </Box>
      ) : (
        <Box className={style.QandA}>
          <Box className={style.questions__image}>
            {isLoading?(
              <Skeleton variant="rectangular"  width={460} height={530}/>
            ):(

            <img src={statusQ[currQ].img} alt={title} />
            )}
          </Box>

          <Box className={style.questions}>
            <p>{statusQ[currQ].Question} </p>

            {statusQ[currQ].answers.map((ans, index) => {
              return (
                <button
                  disabled={clicked}
                  className={style.questions__answer}
                  key={index}
                  onClick={() => handleCorrectAnswer(ans)}
                  style={{
                    backgroundColor:
                    selectedChoice === ans.answer? ans.iscorrect === "true"? "green":"red" : "",
                  }}
                >
                  {ans.answer}
                </button>
              );
            })}
          </Box>

          <Box className={style.questions__score}>
            <Box>
              <p>Need a help? </p>
              <button
                
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                //  onClick={handleHint}
              >
                <img src={hint} alt="hint" />
              </button>
            </Box>
            <Box>
              <p>Your score: </p>
              {SC()}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
