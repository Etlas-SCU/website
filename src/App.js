import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Nav from "./components/Header/Nav.js";
import Download from "./pages/Download/Download";
import AboutUs from "./pages/About/AboutUs";
import KnowHistory from "./pages/TimeLine/KnowHistory";
import { Provider } from "./components/Context/Context";
import Articles from "./pages/Articles/Articles";
import Tours from "./pages/Tours/Tours";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";


function App() {

  return (
    <Provider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know_history" element={<KnowHistory/>} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/articles/:id" element={< ArticleInfo/>}></Route>
          <Route path="/knowledge" element={<div>knowledge</div>} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </Provider>
  );
}

export default App;

