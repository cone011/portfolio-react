import { School, Work, ArrowUpward } from "@mui/icons-material";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCE_SUBTITLE, EXPERIENCE_TITLE } from "../../../utils/values";

const ExperienceItem = (props) => {
  const {
    titleExperience,
    className,
    datePoint,
    iconStyle,
    icon,
    subTitleExperience,
    isActual,
    isStart,
  } = props;
  if (isStart) {
    return (
      <VerticalTimelineElement
        className={className}
        date={datePoint}
        iconStyle={{ background: iconStyle.background, color: iconStyle.color }}
        icon={<ArrowUpward />}
      >
        <h3 className={EXPERIENCE_TITLE}>{titleExperience}</h3>
        <h4 className={EXPERIENCE_SUBTITLE}>{subTitleExperience}</h4>
      </VerticalTimelineElement>
    );
  }
  if (!isActual) {
    return (
      <VerticalTimelineElement
        className={className}
        date={datePoint}
        iconStyle={{ background: iconStyle.background, color: iconStyle.color }}
        icon={icon === "SCHOOL" ? <School /> : <Work />}
      >
        <h3 className={EXPERIENCE_TITLE}>{titleExperience}</h3>
        <h4 className={EXPERIENCE_SUBTITLE}>{subTitleExperience}</h4>
      </VerticalTimelineElement>
    );
  }
  if (isActual) {
    return (
      <VerticalTimelineElement
        className={className}
        date={datePoint}
        iconStyle={{ background: iconStyle.background, color: iconStyle.color }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon === "SCHOOL" ? <School /> : <Work />}
      >
        <h3 className={EXPERIENCE_TITLE}>{titleExperience}</h3>
        <h4 className={EXPERIENCE_SUBTITLE}>{subTitleExperience}</h4>
      </VerticalTimelineElement>
    );
  }
};

export default ExperienceItem;
