// import logo from './logo.svg';
import "./App.css";
import ListExperience from "./components/Experience/ListExperience/ListExperience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ListExperience />
      <Footer />
    </>
  );
}

export default App;
