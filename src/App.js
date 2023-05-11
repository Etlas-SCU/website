import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Nav from "./components/Header/Nav.js";
import Download from "./pages/Download/Download";
import AboutUs from "./pages/About/AboutUs";
import KnowHistory from "./pages/TimeLine/KnowHistory";
import { Provider } from "./components/Context/Context";
import Articles from "./pages/Articles/Articles";
import Tours from "./pages/Tours/Tours";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import ToursInfo from "./pages/ToursInfo/ToursInfo" ;
import ContactUs from "./pages/ContactUs/ContactUS";
import Terms from "./pages/TermsAndConditions/Terms" ;
import { useEffect } from "react";
import KnowledgeCheck from "./pages/KnowledgeCheck/KnowledgeCheck";
import QandA from "./pages/QandA/QandA";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider>
      <Nav />
      <Routes>
        <Route path="/website" element={<Home />} />
        <Route path="/know_history"  element={<KnowHistory /> }/>
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursInfo />}></Route>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleInfo />}/>
        <Route path="/knowledge" element={<KnowledgeCheck/>} />
        <Route path="/knowledge/:title" element={<QandA/>} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Provider>
  );
}

export default App;
