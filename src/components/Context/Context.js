import { createContext, useEffect, useState } from "react";
import pic1 from "../../images/Pics/pic1.png";
import pic2 from "../../images/Pics/pic2.png";
import pic3 from "../../images/Pics/pic3.jpg";
import pic4 from "../../images/Pics/pic4.jpg";
import neith from "../../images/Pics/neith.png";
import statues from "../../images/Pics/statues.png";
import landmarks from "../../images/Pics/landmarks.png";
import monuments from "../../images/Pics/monuments.png";
import { refreshToken } from "../../repositories/authRepo";
import { getArticles } from "../../repositories/articleRepo";
import { getTimeLine } from "../../repositories/timeLineRepo";
export const Context = createContext();

export const Provider = (props) => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langPopup, setLangPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [buttonPopup, setButtonPopup] = useState([false, ""]);
  const [massagePopup, setMassagePopup] = useState(false);
  const [step, setStep] = useState("enterEmail");
  const [Articles, setArticles] = useState([]);
  const [timeLine, setTimeLine] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  
  const [userData, setUserData] = useState({});

  const updateUserData = (newData) => {
    setUserData({
      ...userData,
      ...newData
    });
  }

  const getUserData = async () => {
    return { ...userData };
  }

  var access = localStorage.getItem("access");
  const [LogIn, setLogIn] = useState(access !== null);

  async function timeline() {
    const result = await getTimeLine();
    if (!result.isError) {
      setTimeLine(result.body.results);
      console.log(result);
    } else {
      console.log("error");
    }
  }

  async function articles(pageNum) {
    const articles = await getArticles(pageNum);
    if (!articles.isError) {
      setArticles(articles.body.results);
      console.log(articles);
    } else {
      console.log("error");
    }
  }
  useEffect(() => {
    articles(pageNum);
  }, [pageNum]);

  useEffect(() => {
    setLogIn(access !== null);
  }, [access]);

  useEffect(() => {
    if (LogIn !== null) {
      refreshToken();
    }
    setInterval(refreshToken, 3 * 60 * 1000);
    timeline();
    
  }, []);

  const [statusScore, setStatusScore] = useState(0);
  const [MonumentsScore, setMonumentsScore] = useState(0);
  const [LandmarksScore, setLandmarksScore] = useState(0);

  const LANGUAGES = [
    { en: "English" },
    { ar: "العربيه" },
    { es: "Española" },
    { fr: "Française" },
  ];

  const [timeLineSections, setTimeLineSections] = useState([
    {
      id: 1,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic1,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      id: 2,
      date: "231 B.C. - 369 B.C.",
      title: "The Old Kingdom",
      img: pic2,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      ],
    },
    {
      id: 3,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic3,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      id: 4,
      date: "231 B.C. - 369 B.C.",
      title: "The Old Kingdom",
      img: pic4,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      ],
    },

    {
      id: 5,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic3,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
  ]);

  const statusQ = [
    {
      img: neith,
      Question: "what is this statue ?",
      answers: [
        { answer: "Isis", iscorrect: "false" },
        { answer: "Neith", iscorrect: "true" },
        { answer: "Osiris", iscorrect: "false" },
        { answer: "Yuno", iscorrect: "false" },
      ],
    },
    {
      img: neith,
      Question: "Worship of the goddess Neith began in ?",
      answers: [
        { answer: "c. 7000 to 3150 BCE", iscorrect: "false" },
        { answer: "c. 6000 to 3150 BCE", iscorrect: "true" },
        { answer: "c. 4000 to 3150 BCE", iscorrect: "false" },
        { answer: "c. 2000 to 3150 BCE", iscorrect: "false" },
      ],
    },
  ];

  const monumentsQ = [
    {
      img: neith,
      Question: "what is this monuments ?",
      answers: [
        { answer: "Egyptian Museum of Cairo", iscorrect: "false" },
        { answer: "Great Temple of Abu Simbel", iscorrect: "true" },
        { answer: " Temple of Isis", iscorrect: "false" },
        { answer: " Tomb of Ramses VI", iscorrect: "false" },
      ],
    },
  ];

  const landmarksQ = [
    {
      img: neith,
      Question: "what is this landmarksQ ?",
      answers: [
        { answer: "Egyptian Museum of Cairo", iscorrect: "false" },
        { answer: "Great Temple of Abu Simbel", iscorrect: "true" },
        { answer: " Temple of Isis", iscorrect: "false" },
        { answer: " Tomb of Ramses VI", iscorrect: "false" },
      ],
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Statues",
      dis: "Test yourself in the mostpopular statues.",
      score: `${statusScore}/${statusQ.length}`,
      img: landmarks,
    },
    {
      id: 2,
      title: "Monuments",
      dis: "The world of monuments is in your mind, time to test",
      score: `${MonumentsScore}/${monumentsQ.length}`,
      img: monuments,
    },
    {
      id: 3,
      title: "Landmarks",
      dis: "of course you know alot of landmarks, let’s try.",
      score: `${LandmarksScore}/${landmarksQ.length}`,
      img: statues,
    },
  ];

  const AllContext = {
    mobileOpen,
    setMobileOpen,
    langPopup,
    setLangPopup,
    LANGUAGES,
    selectedLanguage,
    setSelectedLanguage,
    buttonPopup,
    setButtonPopup,
    timeLineSections,
    categories,
    statusQ,
    statusScore,
    setStatusScore,
    massagePopup,
    setMassagePopup,
    LogIn,
    setLogIn,
    step,
    setStep,
    Articles,
    timeLine,
    pageNum,
    setPageNum,
    userData,
    updateUserData,
    getUserData,
  };

  return (
    <Context.Provider value={AllContext}>
      <div style={{ position: "sticky", backgroundColor: "var(--mainColor)" }}>
        {children}
      </div>
    </Context.Provider>
  );
};
