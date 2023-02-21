import { Typewriter } from "react-simple-typewriter";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <span>
      <Typewriter
        words={[" Professional Coder.", " Developer."]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default Header;
