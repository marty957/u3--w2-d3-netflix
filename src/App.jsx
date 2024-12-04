import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
//import SettingPage from "./components/settingPage";
//import EditPage from "./components/EditPage";
const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<MainSection />} />

          <Route path="/tv-shows" element={<MainSection />} />
          <Route path="/movie-details/:imdbID" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
