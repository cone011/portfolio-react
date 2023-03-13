// import logo from './logo.svg';
import "./App.css";
import ListExperience from "./components/Experience/ListExperience/ListExperience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";
import pokemonApp from "./assets/pokemonApp.jpg";
import ListProjects from "./components/Projects/ListProjects/ListProjects";
import { projectList } from "./utils/projectApi";

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
      <ListProjects listProjects={projectList} />
      <Footer />
    </>
  );
}

export default App;
