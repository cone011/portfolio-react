import { Fragment } from "react";
import classes from "./CustomModal.module.css";
import ShowModal from "../ShowModal/ShowModal";

const CustomModal = (props) => {
  const { onCloseModal, projectObject, typeModal } = props;
  console.log(props);
  if (typeModal === "PROJECT") {
    return (
      <Fragment>
        <ShowModal onClose={onCloseModal}>
          <h1>{projectObject.name}</h1>
          <div className={classes.Action}>
            <button className={classes["btn--close"]} onClick={onCloseModal}>
              Close
            </button>
          </div>
        </ShowModal>
      </Fragment>
    );
  }
};

export default CustomModal;
