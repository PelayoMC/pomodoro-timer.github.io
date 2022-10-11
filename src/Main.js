import { useEffect, useState } from "react";
import Config from "./components/Config";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import { finishTimer, playTimer, reloadTimer, stopTimer, uploadTimer } from "./redux/actionCreator";
import { connect } from "react-redux";

const mapStateProps = (state) => {
    return {
      timer: state.timer,
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(playTimer()),
    upload: (t, b) => dispatch(uploadTimer(t, b)),
    stop: () => dispatch(stopTimer()),
    reset: time => dispatch(reloadTimer(time)),
    finish: time => dispatch(finishTimer(time)),
  });

const Main = props => {
    let { play, stop, upload, reset, timer } = props;

    const [breakTime, setBreakTime] = useState(5)
    const [session, setSession] = useState(25)
    useEffect(() => {
        const interval = setInterval(function(){
            upload(session * 60, breakTime * 60)
        }, 1000);
        return () => clearInterval(interval);
    }, [breakTime, session, upload])

    return (
        <div className="App">
            <h1>25 + 5 Clock</h1>
            <Config breaktime={breakTime} session={session} changeBreak={n => setBreakTime(n)} changeSession={n => setSession(n)}></Config>
            <Timer time={timer.time} finish={timer.isFinished}></Timer>
            <Buttons play={play} stop={stop} repeat={() => reset(session * 60)}></Buttons>
        </div>
    )    
}

export default connect(mapStateProps, mapDispatchToProps)(Main);