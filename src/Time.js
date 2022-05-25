import { createUseStyles } from "react-jss";
import {useEffect, useState} from 'react';

const useStyle = createUseStyles({
  timer: {
    position: 'fixed',
    top: 50,
    right: 100,
  }
})

const Timer = ({question}) => {
  const classes = useStyle();
  const [timer, setTimer] = useState(60*10);

  useEffect(() => {
    setTimer(60*10)
  }, [question])

  useEffect(() => {
    let ticker;
    if(timer > 0) {
      ticker = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);

      return () => clearTimeout(ticker)
    }
  }, [timer])

  let first = Math.floor(timer/60);
  let second = timer%60 > 0 ? timer%60 : '00'
  if (second < 10 && second > 0) {
    second = `0${second}`
  };

  let lastTen = {
    color: 'red',
    fontWeight: 'bold'
  }


  return (
    <div className={classes.timer} style={timer < 11 ? lastTen : null}>
      {`${first} : ${second}`}
    </div>
  )
}

export default Timer