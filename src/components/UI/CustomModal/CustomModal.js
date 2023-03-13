import { Fragment } from "react";
import classes from "./CustomModal.module.css";
import ShowModal from "../ShowModal/ShowModal";
import { GitHub } from "@mui/icons-material";

const CustomModal = (props) => {
  const { onCloseModal, projectObject, typeModal } = props;
  if (typeModal === "PROJECT") {
    return (
      <Fragment>
        <ShowModal onClose={onCloseModal}>
          <div className={classes.project}>
            <h1> {projectObject.name}</h1>
            <img src={projectObject.imgUrl} alt={projectObject.name} />
            <p>
              <b>Skills:</b> {projectObject.skills}
            </p>
            <GitHub />
          </div>
        </ShowModal>
      </Fragment>
    );
  }
};

export default CustomModal;
