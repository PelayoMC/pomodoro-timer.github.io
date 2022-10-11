const Timer = (props) => {
  let { time } = props
  const secondsToMins = () => parseInt(time / 60)
  const remainingSeconds = () => parseInt(time % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
  return <div id="timer"> {secondsToMins() + ':' + remainingSeconds()} </div>;
  // return <div id="timer"> {time} </div>;
};

export default Timer;
