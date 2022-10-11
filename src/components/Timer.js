const Timer = (props) => {
  let { time, finish } = props

  const secondsToMins = () => parseInt(time / 60)
  const remainingSeconds = () => parseInt(time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  return <div id="timer" style={{ color: finish ? 'red' : 'white' }}> <div>{secondsToMins() + ':' + remainingSeconds()}</div> <div>{finish ? 'REST' : 'WORK'}</div></div>;
  // return <div id="timer"> {time} </div>;
};

export default Timer;
