import React from 'react';
import Btn from './Button';
import fingerImg from '../img/finger.svg'
import styles from '../style/Start.module.css'

const Start = ({setReady, fieldVal, timeVal, setPeriod}) =>{
 
  // 입력한 시간으로 훈련기간 계산
  const calcPeriod = (time) => {
    return setPeriod(parseInt(10000 / time));
  }

  const handleReady = () => {
    if(fieldVal !== "" && timeVal !== "") {
      setReady(true);
      calcPeriod(timeVal);
    } else {
      alert("입력되지 않았습니다")
    }
  }

    return(
        <div className={styles.start}>
          <Btn name="basic" onClick={handleReady}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
          <img src={fingerImg} alt="클릭" />
        </div>
    )
}

export default Start;




