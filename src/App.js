// import logo from './logo.svg';
import "./App.css";
import ListExperience from "./components/Experience/ListExperience/ListExperience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";
import ListProjects from "./components/Projects/ListProjects/ListProjects";
import { projectList } from "./utils/projectApi";

function App() {
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
