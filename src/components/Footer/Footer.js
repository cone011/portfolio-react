import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.socialMedia}>
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; TESTING FOOTER</p>
    </div>
  );
};

export default Footer;
