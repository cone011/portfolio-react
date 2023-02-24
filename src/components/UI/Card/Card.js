import classes from "./Card.module.css";

const Card = (props) => {
  const { className, children } = props;
  return <div className={`${classes.Card} ${className}`}>{children}</div>;
};

export default Card;
