import classes from "./ExperienceItem.module.css";
import { School, Work } from "@mui/icons-material";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCE_SUBTITLE, EXPERIENCE_TITLE } from "../../../utils/values";

const ExperienceItem = (props) => {
  const { titleExperience, className, datePoint, iconStyle, icon } = props;
  return (
    <VerticalTimelineElement
      className={className}
      date={datePoint}
      iconStyle={{ background: iconStyle.background, color: iconStyle.color }}
      icon={icon === "SCHOOL" ? <School /> : <Work />}
    >
      <h3 className={EXPERIENCE_TITLE}>{titleExperience}</h3>
      <h4 className={EXPERIENCE_SUBTITLE}>SUBTITULO</h4>
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
