import { Fragment } from "react";
import { Typewriter } from "react-simple-typewriter";
import { DEFAULT_VALUE_INITIAL } from "../../utils/values";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.Home}>
        <div className={classes.About}>
          <h2>
            <span>
              <Typewriter
                words={DEFAULT_VALUE_INITIAL}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
