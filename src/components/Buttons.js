import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";
const Buttons = () => {
  return (
    <div id="buttons" className="d-flex justify-content-center">
      <button
        id="ctrl-btn"
        type="button"
        data-bs-toggle="button"
        className="col btn btn-success btn-md"
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button
        id="ctrl-btn"
        type="button"
        data-bs-toggle="button"
        className="col btn btn-danger btn-md"
      >
        <FontAwesomeIcon icon={faStop} />
      </button>
      <button
        id="ctrl-btn"
        type="button"
        data-bs-toggle="button"
        className="col btn btn-primary btn-md"
      >
        <FontAwesomeIcon icon={faRepeat} />
      </button>
    </div>
  );
};

export default Buttons;
