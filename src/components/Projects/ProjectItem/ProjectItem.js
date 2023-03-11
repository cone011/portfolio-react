import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  const { name, imgUrl, id } = props;
  return (
    <div className={classes.projectItem}>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={classes.bgImage}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
