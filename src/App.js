import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Nav from "./components/Header/Nav.js";
import Download from "./pages/Download/Download";
import AboutUs from "./pages/About/AboutUs";
import KnowHistory from "./pages/TimeLine/KnowHistory";
import { Provider } from "./components/Context/Context";


function App() {

  return (
    <Provider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know_history" element={<KnowHistory/>} />
          <Route path="/tours" element={<div>Tours</div>} />
          <Route path="/articles" element={<div>artilces</div>} />
          <Route path="/knowledge" element={<div>knowledge</div>} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
    </Provider>
  );
}

export default App;

