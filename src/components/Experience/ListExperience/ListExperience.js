import "react-vertical-timeline-component/style.min.css";
import { COLOR_LINE, EXPERIENCE_LIST } from "../../../utils/values";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import classes from "./ListExperience.module.css";

const ListExperience = () => {
  return (
    <div className={classes.backColor}>
      <VerticalTimeline lineColor={COLOR_LINE}>
        {EXPERIENCE_LIST.map((item) => (
          <ExperienceItem
            titleExperience={item.titleExperience}
            subTitleExperience={item.subTitleExperience}
            className={item.className}
            datePoint={item.datePoint}
            iconStyle={item.iconStyle}
            icon={item.icon}
            isActual={item.isActual}
            isStart={item.isStart}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ListExperience;
