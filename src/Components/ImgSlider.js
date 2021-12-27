import { Component } from "react";
import "./ImgSlider.css";
const imgs = [
  "https://www.filimo.com/public/public/filemanager/homeslider/g3xwq_desktop_1_v1.jpg?6",
  "https://www.filimo.com/public/public/filemanager/homeslider/xeju0_desktop_1_v1.jpg?6",

  "https://www.filimo.com/public/public/filemanager/homeslider/iovf2_desktop_1_v1.jpg?6",
  "https://www.filimo.com/public/public/filemanager/homeslider/fe1o6_desktop_1_v4.jpg?6",
];
const Details = [
  "قسمت پایانی سریال میدان سرخ",
  "قسمت دهم سریال جزیره",

  "رئالیتی شو جوکر",
  "فصل جدید سریال ویچر",
];
const ImgDetails = [
  "https://www.filimo.com/public/public/filemanager/homeslider/g3xwq_logotype_v1.png",
  "https://www.filimo.com/public/public/filemanager/homeslider/xeju0_logotype_v1.png",
  "https://www.filimo.com/public/public/filemanager/homeslider/iovf2_logotype_v1.png",
  "https://www.filimo.com/public/public/filemanager/homeslider/fe1o6_logotype_v4.png",
];

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryIndex: 0,
      secondaryIndex: 0,
      primaryStyle: {
        opacity: 1,
      },
      secondaryStyle: {
        opacity: 0,
      },
      autoSlide: true,
      slideTimeout: setTimeout(() => this.autoSlide(), 10000),
    };
  }
  slidePrevious = () => {
    if (!this.state.transit) {
      const nextIndex =
        this.state.primaryIndex - 1 < 0
          ? imgs.length - 1
          : this.state.primaryIndex - 1;
      this.transitSlides(nextIndex, false);
    }
  };
  slideNext = () => {
    if (!this.state.transit) {
      const nextIndex =
        this.state.primaryIndex + 1 === imgs.length
          ? 0
          : this.state.primaryIndex + 1;
      this.transitSlides(nextIndex, true);
    }
  };
  autoSlide = () => {
    this.slideNext();
  };
  transitSlides = (nextIndex, left) => {
    this.setState({
      primaryStyle: {
        animation: left
          ? "slideOutLeft 1s ease-in-out"
          : "slideOutRight 1s ease-in-out",
        transition: "all 1s",
        opacity: 0,
      },
      secondaryStyle: {
        animation: left
          ? "slideInLeft 1s ease-in-out"
          : "slideInRight 1s ease-in-out",
        transition: "all 1s",
        opacity: 1,
      },
      transit: true,
      secondaryIndex: nextIndex,
    });
    setTimeout(() => this.updatePrimary(), 1000);

    if (this.state.autoSlide) {
      clearTimeout(this.state.slideTimeout);
      this.setState({
        slideTimeout: setTimeout(() => this.autoSlide(), 10000),
      });
    }
  };
  updatePrimary = () => {
    this.setState({
      transit: false,
      primaryIndex: this.state.secondaryIndex,
      primaryStyle: {
        opacity: 1,
      },
      secondaryStyle: {
        opacity: 0,
      },
    });
  };
  positionHandler = (position) => {
    if (!this.state.transit) {
      const diff = this.state.primaryIndex - position;
      if (diff !== 0) {
        this.transitSlides(position, diff < 0 ? true : false);
      }
    }
  };
  checkHandler = (event) => {
    const { autoSlide } = this.state;
    this.setState({ autoSlide: !autoSlide });
    if (autoSlide) {
      clearTimeout(this.state.slideTimeout);
    } else {
      this.setState({
        slideTimeout: setTimeout(() => this.autoSlide(), 10000),
      });
    }
  };
  render() {
    const indicators = imgs.map((img, i) => {
      const selectStyle =
        this.state.primaryIndex === i ? { background: "white" } : {};
      return (
        <div
          key={i}
          style={selectStyle}
          onClick={() => this.positionHandler(i)}
          className="positionIndicator"
        ></div>
      );
    });
    return (
      <div className="slideShow">
        <div
          className="slideArrow arrowLeft"
          onClick={() => this.slidePrevious()}
        >
          &lt;
        </div>
        <div className="slideArrow arrowRight" onClick={() => this.slideNext()}>
          &gt;
        </div>
        <div className="slidePositionWrapper">{indicators}</div>

        <div className="slide" style={this.state.primaryStyle}>
          <img
            src={imgs[this.state.primaryIndex]}
            alt=""
            className="slideImg"
          />
        </div>
        <div className="detail">
          <img
            className="shadow-inner	"
            src={ImgDetails[this.state.primaryIndex]}
          />
          <p className="text-2xl mt-4 drop-shadow		">
            {Details[this.state.primaryIndex]}
          </p>
          <button className="pt-2.5 pb-2.5 pl-6 pr-6 text-black	mt-5 mr-1 rounded bg-[#ededed]">
            اطلاعات بیشتر
          </button>
        </div>
        <div className="slide" style={this.state.secondaryStyle}>
          <img
            src={imgs[this.state.secondaryIndex]}
            alt=""
            className="slideImg"
          />
        </div>
      </div>
    );
  }
}

export default SlideShow;
