// import logo from './logo.svg';
import "./App.css";
import ListExperience from "./components/Experience/ListExperience/ListExperience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";
import ProjectItem from "./components/Projects/ProjectItem/ProjectItem";
import pokemonApp from "./assets/pokemonApp.jpg";

function App() {
  const list = [
    {
      name: "Pokemon App",
      image: pokemonApp,
      skills: "JavaScript,HTML,CSS",
    },
  ];
  return (
    <>
      <Navbar />
      <Header />
      <ListExperience />
      <ProjectItem name={list[0].name} imgUrl={list[0].image} />
      <Footer />
    </>
  );
}

export default App;
