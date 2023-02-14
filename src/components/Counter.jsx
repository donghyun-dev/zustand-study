import React from 'react'
import useCounterStore from './../store/counter';
import styles from './counter.module.css';

function Counter() {
  const num = useCounterStore(state => state.num);  
  const increaseNum = useCounterStore(state => state.increaseNum);  
  const decreaseNum = useCounterStore(state => state.decreaseNum);  
  const resetNum = useCounterStore(state => state.resetNum);  

  return (
    <div className={styles.counter}>
        <p className={styles.counterText}>{String(num).length < 2 ? `0${num}` : num}</p>
        <button className={styles.CtrlBtn} onClick={increaseNum}>+1</button>
        <button className={styles.CtrlBtn} onClick={decreaseNum}>-1</button>
        <button className={styles.CtrlBtn} onClick={resetNum}>reset</button>
    </div>
  )
}

export default Counter