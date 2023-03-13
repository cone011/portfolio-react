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
  const { name, imgUrl, id, skills } = props;
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
      <div className={classes.projectItem}>
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={classes.bgImage}
        />
        <h1>{name}</h1>
        <button onClick={onOpenDetail} className="btn">
          View Details
        </button>
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
