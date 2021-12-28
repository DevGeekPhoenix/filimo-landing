import { Component } from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import SlideShow from "../Components/ImgSlider";
import SpecialFilms from "../Components/SpecialFilms";
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
        <SpecialFilms />
      </div>
    );
  }
}

export default App;
