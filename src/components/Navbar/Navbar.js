import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Links}>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
};

export default Navbar;
