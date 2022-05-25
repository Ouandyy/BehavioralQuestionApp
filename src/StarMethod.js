import './App.css';
import {createUseStyles} from 'react-jss'
import { useEffect, useState } from 'react';
const useStyle = createUseStyles({
  textArea: {
    width: 500,
    height: 100
  }
})

const StarMethod = (obj) => {
  const classes = useStyle();
  const [textArr1, setTextArr1] = useState('')
  const [textArr2, setTextArr2] = useState('')
  const [textArr3, setTextArr3] = useState('')
  const [textArr4, setTextArr4] = useState('')

useEffect(() => {
  setTextArr1('')
  setTextArr2('')
  setTextArr3('')
  setTextArr4('')
}, [obj])

const onChange = (which) => {
  let func;
  switch (which) {
    case textArr1:
      func=setTextArr1;
      break;
    case textArr2:
      func=setTextArr2;
      break;
    case textArr3:
      func=setTextArr3;
      break;
    default:
      func=setTextArr4;
  }

  return (e) => {
    func(e.target.value)
  }
}

  return(
    <div className="starArea">
      <div className='textArea'>
        <p>S:</p> <textarea className={classes.textArea} value={textArr1} onChange={onChange(textArr1)}/>
      </div>
      <div>
        <p>T:</p><textarea className={classes.textArea} value={textArr2} onChange={onChange(textArr2)}/>
      </div>
      <div>
        <p>A:</p><textarea className={classes.textArea} value={textArr3} onChange={onChange(textArr3)}/>
      </div>
      <div>
        <p>R:</p><textarea className={classes.textArea} value={textArr4} onChange={onChange(textArr4)}/>
      </div>
    </div>
  )
}

export default StarMethod