import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import HomeBoxes from "./components/HomeBoxes/HomeBoxes";
import Classes from "./components/Classes/Classes";
import Bmi from "./components/Bmi/Bmi";
import Trainer from "./components/Trainer/Trainer";
import Purchase from "./components/Purchase/Purchase";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeBoxes />
      <Classes />
      <Bmi />
      <Trainer />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
