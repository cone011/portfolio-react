import classes from "./SkillItem.module.css";

const SkillItem = (props) => {
  const { technology, icon } = props;
  return (
    <div className={classes.skillItem}>
      <img className={classes.imgSkills} src={icon} alt={technology} />
      <p className={classes.titleSkill}>{technology}</p>
    </div>
  );
};

export default SkillItem;
