import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Config = () => {
  return (
    <div id="config" className="d-flex justify-content-between pt-3">
      <div id="break-length">
        <h2>Break length</h2>
        <div className="row">
          <button className="col btn btn-sm">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <div id="config-value" className="col">
            2
          </div>
          <button className="col btn btn-sm">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
      <div id="session-length">
        <h2>Session length</h2>
        <div className="row">
          <button className="col btn btn-sm">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <div id="config-value" className="col">
            2
          </div>
          <button className="col btn btn-sm">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Config;
