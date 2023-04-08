import classes from "./ListSkills.module.css";
import { SKILL_LIST } from "../../../utils/skillsApi";
import SkillItem from "../SkillItem/SkillItem";

const ListSkills = () => {
  return (
    <section className={classes.listSkills}>
      <div className={classes.containerText}>
        <h2 className={classes.title}>Mis conocimientos</h2>
      </div>
      <div className={classes.containerSkills}></div>
      {SKILL_LIST.map((item) => (
        <SkillItem
          key={item.skillId}
          technology={item.technology}
          icon={item.icon}
        />
      ))}
    </section>
  );
};

export default ListSkills;
