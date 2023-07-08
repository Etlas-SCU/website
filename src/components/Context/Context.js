import { createContext, useEffect, useState } from "react";
import pic1 from "../../images/Pics/pic1.png";
import pic2 from "../../images/Pics/pic2.png";
import pic3 from "../../images/Pics/pic3.jpg";
import pic4 from "../../images/Pics/pic4.jpg";
import statues from "../../images/Pics/statues.png";
import landmarks from "../../images/Pics/landmarks.png";
import monuments from "../../images/Pics/monuments.png";
import { getArticles } from "../../repositories/articleRepo";
import { getTimeLine } from "../../repositories/timeLineRepo";
import { getUserInfo } from "../../repositories/ProfileRepo";
import { getTours } from "../../repositories/toursRepo";

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
  const [Tours, setTours] = useState([]);
  const [timeLine, setTimeLine] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const [userData, setUserData] = useState({});

  const updateUserData = (newData) => {
    setUserData({
      ...userData,
      ...newData,
    });
  };

  const getUserData = async () => {
    return { ...userData };
  };

  var access = localStorage.getItem("access");
  const [LogIn, setLogIn] = useState(access !== null);

  async function timeline() {
    const result = await getTimeLine();
    if (!result.isError) {
      setTimeLine(result.body.results);
    } else {
    }
  }

  async function articles(pageNum) {
    const articles = await getArticles(pageNum);
    if (!articles.isError) {
      setArticles(articles.body.results);
    } else {
    }
  }

  async function tours(pageNum) {
    const tours = await getTours(pageNum);
    if (!tours.isError) {
      setTours(tours.body.results);
    } else {
    }
  }

  async function fetchUserData() {
    var result = await getUserInfo();
    return result;
  }

  useEffect(() => {
    articles(pageNum);
    tours(pageNum);
  }, [pageNum]);

  useEffect(() => {
    setLogIn(access !== null);
  }, [access]);

  useEffect(() => {
    async function getData() {
      if (LogIn) {
        var result = await fetchUserData();
        if (!result.isError) {
          updateUserData(result.body);
        }
      }
    }

    getData();
  }, [LogIn]);

  const LANGUAGES = [
    { en: "English" },
    { ar: "العربيه" },
    { es: "Española" },
    { fr: "Française" },
  ];

  const [timeLineSections, setTimeLineSections] = useState([
    {
      id: 1,
      date: "2700 B.C.",
      title: "Old Kingdom",
      img: pic1,
      description: [
        "The Old Kingdom (Dynasties 3 to 6) was a period of great prosperity and innovation whose most memorable feature was surely the pyramid. In addition to flat-topped Mastabatombs (now used for the burials of nobility), massive stone pyramid complexes were constructed at sites from Abu Rawwash to Maydum and used as burial-places for the king and royal family members. At Jizah, three of the largest pyramids were constructed (for Khufu, Khafra, and Menkaura) and a great sphinx, representing the king (Khufu) as Ra-Horakhty, was carved in nearby bedrock. Adjacent to the pyramids were mortuary temples. Surrounding them lay vast cemeteries of mastabas and rock-cut tombs for minor family members, courtiers, officials, and priests.",
        "Not until Dynasty5 were the hitherto undecorated pyramid chambers carved with elaborate Pyramid Texts. These were religious and magical utterances intended to facilitate the king's journey to the Netherworld, the journey of the sun through the heavens, and the safeguarding of the royal body. Unlike royal tombs, the tombs of noblemen had been decorated since the Early Dynastic with elaborately carved and painted scenes of daily life.    ",
        "Egyptologists have suggested that the Old Kingdom ended painfully, at the end of Dynasty 6, with the economic, political, and cultural collapse of the country. They have attributed the resulting depression to climate change, low Niles, political jealousies, a decline in foreign trade, and the inordinately long (96 years) and increasingly weak reign of Pepy II. Most now believe that the changes ushering in the First Intermediate Period were neither as rapid nor as dramatic as earlier historians have suggested.",
      ],
    },
    {
      id: 2,
      date: "2184 B.C.",
      title: "First Intermediate Period",
      img: pic2,
      description: [
        "Dynasties 7 to 11, called the First Intermediate Period, have been described as a time of political disunity, economic depression, and cultural decline separating the impressive achievements of the Old Kingdom from those of the Middle Kingdom. Such a picture is now regarded as too simplistic. But there were dramatic changes in the administration of Egypt during this time and there was none of the monumental building activity or other costly projects of earlier dynasties. Much of the country's bureaucratic authority was now in the hands of local officials. But the city of Memphis continued to retain some of its former authority as Dynasties 7 and 8, until a rival group of local administrators at Ihnasiyat al Madinah began to expand their control over a significant part of Egypt as Dynasties 9 and 10.",
        "The southern city of Thebes emerged as a rival to Ihnasiyat al Madinah, its rulers forming Dynasty11. Conflicts between them resulted in the victory of Thebes and the collapse of power of the rulers from Ihnasiyat al Madinah. The reunification of the country took place under Mentuhetep II. Later Egyptians recognized his reign as the beginning of the Middle Kingdom.",
        "First Intermediate Period art and architecture are often referred to as provincial in style. The characteristics of the various provincial styles were the result of two factors: the absence of any central authority to train artists and establish or maintain stylistic standards; and the inability of provincial administrations to acquire raw materials beyond the borders of their own administrative district.",
      ],
    },
    {
      id: 3,
      date: "2040 B.C.",
      title: "Middle Kingdom",
      img: pic3,
      description: [
        "The Middle Kingdom, Dynasties 11 to 13, began with the reunification of Egypt by the Dynasty11 Theban king, Mentuhetep II. Many of its features were drawn from Old Kingdom models. The kings of Dynasty 11 made Thebestheir capital city and they were buried there, in saff (meaning row in Arabic) tombs, at the northern end of the Theban Necropolis. The most impressive monument of the dynasty is the temple-tomb at Dayr al Bahri built by Mentuhetep II.",
        "Middle Kingdom rulers such as Senusret III returned significant power to the king, expanded agriculture in the Fayyum, established tighter military and economic control over Nubia, increased foreign trade, and devoted considerable resources to art and architecture. Temples were established or enlarged, most notably that of Amen at Karnak. The White Chapel, the Barkshrine of Senusret I, at Karnak is a premier example of the period's outstanding workmanship.",
        "Dynasty 12 began with Mentuhetep IV's former Vizier, Amenemhat I, who, for unknown reasons, moved his capital from Thebes to a new (as yet, unidentified) location south of Memphis called Itjtawy. During this period, royal cemeteries were located at Lisht, Lahun, Dahshur, and Hawwarat al Maqta', and royal tombs again took the form of pyramids. A new religious literature appeared in the First Intermediate Period when the so-called Coffin Texts replaced Pyramid Texts and, as their name implies, were painted on coffins rather than pyramid walls. They were non-royal texts used by many classes of society, and are sometimes said to reflect the increasing democratization of Egyptian funerary beliefs.",
      ],
    },
    {
      id: 4,
      date: "1782 B.C.",
      title: "Second Intermediate Period",
      img: pic4,
      description: ["At the same time as the decline in authority of the rulers of Dynasty13, large numbers of foreigners from western Asia were moving into parts of Lower Egypt and settling there. Few monuments date to this time and it is difficult to trace this migration in detail. But the immigrants were later called the Hyksos, from the Egyptian term heka khasut, meaning rulers of foreign lands. They were a mixed bag of nomadic and semi-nomadic peoples who came to Egypt not as warriors bent on conquest, as we once believed, but as peasants seeking grazing land for their sheep and goats or work as laborers and servants. They quickly adopted Egyptian customs and readily mixed these with their own cultural traditions.",
        "By Dynasty 15, the Hyksos had established their own city in the eastern Delta at Tall al Dab'a and as their numbers increased they moved deeper into the country, eventually controlling Memphis and other cities in the north. They ruled much of Lower and Middle Egypt for over a century and sought alliances with opponents of Egypt to the south in Nubia. Not surprisingly, this potential pincer movement soon brought the Upper Egyptians, whose capital was Thebes, into open conflict with both. The ensuing battles, fought by Theban kings Ta'o II, Kames, and Ahmes I, were ultimately won by the Theban rulers who regained control of a united Egypt.    ",
        "The Hyksos introduced the harnessed horse and chariot into Egypt, both used extensively in the New Kingdom for military activities, but little else. They also brought the composite bow, armor, the vertical loom, the lyre, and the lute.",
      ],
    },

    {
      id: 5,
      date: "1570 B.C. - 1070 B.C.",
      title: "New Kingdom",
      img: pic3,
      description: ["Dynasty18 through Dynasty 20, known as the New Kingdom, witnessed a time of international prestige and prosperity for Egypt. The kings of this period conducted extensive military, diplomatic and trade relations with Nubians as far south as the Fourth Cataract in Nubia, with the Hittite Empire and the city states as far north as far as the Euphrates River in Syria, and with other Mediterranean states. In some areas Egypt exercised outright control. Several New Kingdom pharaohs (Thutmes IV, Amenhetep IIIand Rameses II) strengthened their international relations by marrying the daughters of foreign monarchs, and building Egyptian temples in foreign outposts. Foreigners were also active in all levels of Egyptian society, from slaves to personal aides to the king. Egyptian religion, language and art received some influences from these foreign contacts.",
      ],
    },
  ]);

  const categories = [
    {
      id: 1,
      title: "Statues",
      dis: "Test yourself in the mostpopular statues.",
      img: landmarks,
    },
    {
      id: 2,
      title: "Monuments",
      dis: "The world of monuments is in your mind, time to test",
      img: monuments,
    },
    {
      id: 3,
      title: "Landmarks",
      dis: "of course you know alot of landmarks, let’s try.",
      img: statues,
    },
  ];

  useEffect(() => {
    articles(pageNum);
  }, [pageNum]);

  useEffect(() => {
    setLogIn(access !== null);
  }, [access]);

  // useEffect(() => {
  //   if (LogIn !== null) {
  //     refreshToken();
  //   }
  //   setInterval(refreshToken, 3 * 60 * 1000);
  //   timeline();
  // }, []);

  async function timeline() {
    const result = await getTimeLine();
    if (!result.isError) {
      setTimeLine(result.body.results);
    } else {
    }
  }

  async function articles(pageNum) {
    const articles = await getArticles(pageNum);
    if (!articles.isError) {
      setArticles(articles.body.results);
    } else {
    }
  }

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
    massagePopup,
    setMassagePopup,
    LogIn,
    setLogIn,
    step,
    setStep,
    Articles,
    Tours,
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
