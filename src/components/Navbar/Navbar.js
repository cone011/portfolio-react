import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Reorder } from "@mui/icons-material";

const Navbar = () => {
  const [canExpandBar, setCanExpandBar] = useState(false);

  useEffect(() => {
    setCanExpandBar(false);
  }, []);

  const onChangeExpandBar = () => {
    setCanExpandBar(!canExpandBar);
  };

  return (
    <div
      className={classes.Navbar}
      id={canExpandBar ? classes["open"] : classes["close"]}
    >
      <div className={classes.ToggleButton}>
        <button onClick={onChangeExpandBar}>
          <Reorder />
        </button>
      </div>
      <div className={classes.Links}>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
};

export default Navbar;
