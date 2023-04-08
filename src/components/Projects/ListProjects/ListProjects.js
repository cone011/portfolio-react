import classes from "./ListProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const ListProjects = (props) => {
  const { listProjects } = props;

  return (
    <div className={classes.Projects}>
      <h1>My Personal Projects</h1>
      <div className={classes.ListProject}>
        {listProjects.map((item) => (
          <ProjectItem
            key={item.projectId}
            name={item.name}
            imgUrl={item.image}
            id={item.projectId}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProjects;
