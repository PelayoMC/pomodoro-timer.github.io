import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faRepeat } from "@fortawesome/free-solid-svg-icons";
const Buttons = props => {
  let { play, stop, repeat } = props;

  return (
    <div id="buttons" className="d-flex justify-content-center">
      <button
        id="ctrl-btn"
        type="button"
        className="col btn btn-success btn-md"
        onClick={() => play()}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
      <button
        id="ctrl-btn"
        type="button"
        className="col btn btn-danger btn-md"onClick={() => stop()}
      >
        <FontAwesomeIcon icon={faStop} />
      </button>
      <button
        id="ctrl-btn"
        type="button"
        className="col btn btn-primary btn-md"onClick={() => repeat()}
      >
        <FontAwesomeIcon icon={faRepeat} />
      </button>
    </div>
  );
};

export default Buttons;
