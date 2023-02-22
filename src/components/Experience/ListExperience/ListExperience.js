import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCE_LIST } from "../../../utils/values";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import classes from "./ListExperience.module.css";

const ListExperience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor={classes.timeColor}>
        {EXPERIENCE_LIST.map((item) => (
          <ExperienceItem
            titleExperience={item.titleExperience}
            className={item.className}
            datePoint={item.datePoint}
            iconStyle={item.iconStyle}
            icon={item.icon}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ListExperience;
