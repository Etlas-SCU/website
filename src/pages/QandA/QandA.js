import React, { useState } from "react";
import style from "./QandA.module.css";
import { Box, Skeleton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import hint from "../../images/Pngs/Hint.png";
import {
  getQuestionsByTitle,
  setBestScoreByTitle,
} from "../../repositories/questionsRepo";
import { useContext } from "react";
import { Context } from "../../components/Context/Context";
import MPopUp from "../../components/PopUp_Message/error/MPopUp";

export default function QandA() {
  const { title } = useParams();
  const [currQ, setCurrQ] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currScore, setCurrScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [skeleton, setSkeleton] = useState(true);
  const { setMassagePopup ,LogIn} = useContext(Context);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      var result = await getQuestionsByTitle(title);
      setIsLoading(false);

      if (!result.isError) {
        setQuestions(result.body)
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 2000);
  }, []);

  function isCorrectAnswer(ans) {
    return ans.choice_text == questions[currQ].correct_choice;
  }

  const handleCorrectAnswer = async (answer) => {
    setSelectedChoice(answer.choice_text);
    setClicked(true);
    if (currQ === questions.length - 1 || !isCorrectAnswer(answer)) {
      var newScore = currScore;
      if (isCorrectAnswer) newScore++;
      if (!LogIn) {
        setMassagePopup(true);
        setPopup(<MPopUp type="error">your score not be saved,SignIn first</MPopUp>);
      }else{
        var result = await setBestScoreByTitle(title, newScore);
        if(!result.isError){
          setPopup(<MPopUp type="error">your score saved</MPopUp>);
        }else{
          setPopup(<MPopUp type="error">error</MPopUp>);
        }
      }
      setTimeout(() => {
        setQuizFinished(true);
        setClicked(false);
      }, 1500);
    }
    if (isCorrectAnswer(answer)) {
      setCurrScore(currScore + 1);
    }
    setTimeout(() => {
      setCurrQ(currQ + 1);
      setSelectedChoice(null);
      setClicked(false);
    }, 1500);
  };

  // const handleHint=()=>{
  //   const filteredAnswers = answers.filter((answer) => answer.isCorrect || filteredAnswers.length < 2);
  //   setAnswers(filteredAnswers);
  // }
  

  const SC = () => {
    return (
      <p>
        {currScore}/{questions.length}
      </p>
    );
  };

  if (isLoading) {
    return <h2 className={style.error}>Loading..</h2>;
  }

  if (questions == null || questions.length == 0) {
    return <h2 className={style.error}>No questions</h2>;
  }

  return (
    <Box p="120px 0" height="100%">
      {popup}
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
            {skeleton ? (
              <Skeleton variant="rectangular" className={style.skeleton} />
            ) : (
              <img src={questions[currQ].image_url} alt={title} />
            )}
          </Box>

          <Box className={style.questions}>
            <p>{questions[currQ].statement} </p>

            {questions[currQ].shuffled_choices.map((ans) => {
              return (
                <button
                  disabled={clicked}
                  className={style.questions__answer}
                  key={ans.id}
                  onClick={() => handleCorrectAnswer(ans)}
                  style={{
                    backgroundColor:
                      selectedChoice === ans.choice_text
                        ? isCorrectAnswer(ans)
                          ? "green"
                          : "red"
                        : "",
                  }}
                >
                  {ans.choice_text}
                </button>
              );
            })}
          </Box>

          <Box className={style.questions__score}>
            <Box>
              <p>Need a help? </p>
              <button
                className={style.hint}
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
