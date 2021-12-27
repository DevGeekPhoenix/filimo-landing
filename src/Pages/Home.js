import { Component } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import SlideShow from "../Components/ImgSlider";
import { Link } from "react-router-dom";
import FilterFilms from "../Components/FilterFilms";

class App extends Component {
  render() {
    return (
      <div>
        <div className="absolute z-30 w-full">
          <Navbar />
        </div>
        <SlideShow />
        <FilterFilms />
      </div>
    );
  }
}

export default App;
