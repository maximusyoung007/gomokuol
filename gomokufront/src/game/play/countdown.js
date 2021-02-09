import React, {useEffect, useState} from 'react'

const CountDown = (props) => {
  const [pause, setPause] = useState(true);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    hours: parseInt(props.hours),
    minutes: parseInt(props.minutes),
    seconds: parseInt(props.seconds),
  })

  const tick = () => {
    console.log(time);
    if(pause || over)
      return;
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    } else if (time.seconds === 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
    }
  }

  const reset = () => {
    setTime({
      hours: parseInt(props.hours),
      minutes: parseInt(props.minutes),
      seconds: parseInt(props.seconds),
    });
    setPause(true);
    setOver(false);
  }

  const start = () => {
    setPause(false);
  }

  useEffect(() => {
    if (!pause) {
      let timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  })

  return (
    <div>
      {
        time.hours === "" || time.hours === null || time.hours === 0 ?
          <p>
            {time.minutes.toString().padStart(2, "0")}:{time.seconds.toString().padStart(2, "0")}
          </p>
          :
          <p>
            {time.hours.toString().padStart(2, "0")}:{time.minutes.toString().padStart(2, "0")}:{time.seconds.toString().padStart(2, "0")}
          </p>
      }
      <div>{over ? "Time's up!" : ""}</div>
      <button onClick={() => setPause(!pause)}>
        {pause ? "Resume" : "Pause"}
      </button>
      <button onClick={() => reset()}>Restart</button>
      <button onClick={() => start()}>start</button>
    </div>
  )
}
export default CountDown;
