import { Fragment, useReducer } from "react";
import { defaultTodoReduceValues } from "../../../utils/values";
import CustomModal from "../../UI/CustomModal/CustomModal";
import classes from "./ProjectItem.module.css";

const todoReducer = (curTodo, action) => {
  switch (action.type) {
    case "SET_DETAIL":
      return {
        isShow: true,
        projectObject: action.projectObject,
        typeModal: action.typeModal,
      };
    case "END":
      return { ...curTodo, isShow: false };
    default:
      throw new Error("There is no action to do in this reducer");
  }
};

const ProjectItem = (props) => {
  const { name, imgUrl, projectId, skills } = props;
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReduceValues);

  const onOpenDetail = () => {
    dispatchTodo({
      type: "SET_DETAIL",
      projectObject: { name: name, imgUrl: imgUrl, skills: skills },
      typeModal: "PROJECT",
    });
  };

  const onCloseDetail = () => {
    dispatchTodo({ type: "END" });
  };

  return (
    <Fragment>
      <div
        className={classes.projectItem}
        key={projectId}
        onClick={onOpenDetail}
      >
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={classes.bgImage}
        />
        <h1>{name}</h1>
      </div>
      {todo.isShow && (
        <CustomModal
          onCloseModal={onCloseDetail}
          projectObject={todo.projectObject}
          typeModal={todo.typeModal}
        />
      )}
    </Fragment>
  );
};

export default ProjectItem;
