import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

const Config = props => {
  let { breaktime, session, changeBreak, changeSession } = props;
  
  const changeElement = (el, func) => {
    if (el > 0 && el <= 30) func(el)
  }

  return (
    <div id="config" className="d-flex justify-content-between pt-3">
      <div id="break-length">
        <h2>Break length</h2>
        <div className="row">
          <button className="col btn btn-sm"onClick={() => changeElement(--breaktime, changeBreak)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <div id="config-value" className="col">
            {breaktime}
          </div>
          <button className="col btn btn-sm"onClick={() => changeBreak(++breaktime, changeBreak)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
      <div id="session-length">
        <h2>Session length</h2>
        <div className="row">
          <button className="col btn btn-sm" onClick={() => changeElement(--session, changeSession)}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <div id="config-value" className="col">
            {session}
          </div>
          <button className="col btn btn-sm"onClick={() => changeElement(++session, changeSession)}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

Config.propTypes = {
  breaktime: PropTypes.number,
  session: PropTypes.number,
  changeBreak: PropTypes.func,
  changeSession: PropTypes.func,
};

Config.defaultProps = {
  breaktime: 5,
  session: 25,
  changeBreak: () => {},
  changeSession: () => {},
};

export default Config;
