import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/doctor/:id" element={<SingleDoctor />} />
        <Route path="/About" element={<About />} />
        <Route path="/doctordcardlist" element={<DoctorsCardList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
