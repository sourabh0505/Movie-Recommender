import "./App.css";
import Slider from "./components/UpcomingMovieSlider/Slider";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrendingMovieSlider from "./components/TrendingMovieSlider/TrendingMovieSlider";
import ActionMovieSlider from "./components/ActionMovieSlider/ActionMovieSlider";

function App() {
  return (
    <div className="App bg-gray-900">
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<><Slider /><TrendingMovieSlider/><ActionMovieSlider/></>}></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
