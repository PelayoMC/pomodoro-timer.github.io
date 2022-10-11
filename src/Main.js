import { useEffect, useState } from "react";
import Config from "./components/Config";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";
import { playTimer, reloadTimer, stopTimer, uploadTimer } from "./redux/actionCreator";
import { connect } from "react-redux";

const mapStateProps = (state) => {
    return {
      timer: state.timer,
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    play: () => dispatch(playTimer()),
    upload: () => dispatch(uploadTimer(1)),
    stop: () => dispatch(stopTimer()),
    reset: () => dispatch(reloadTimer()),
  });

const Main = props => {
    let { play, stop, upload, reset, timer } = props;
    const [breakTime, setBreakTime] = useState(5)
    const [session, setSession] = useState(25)

    useEffect(() => {
        setInterval(function(){
            upload()
        }, 1000);
    }, [upload])

    return (
        <div className="App">
            <h1>25 + 5 Clock</h1>
            <Config breakTime={breakTime} session={session} changeBreak={n => setBreakTime(n)} changeSession={n => setSession(n)}></Config>
            <Timer time={timer.time}></Timer>
            <Buttons play={play} stop={stop} repeat={reset}></Buttons>
        </div>
    )    
}

export default connect(mapStateProps, mapDispatchToProps)(Main);