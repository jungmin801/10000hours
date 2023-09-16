import React from 'react';
import Btn from './Button';
import fingerImg from '../img/finger.svg'
import styles from '../style/Start.module.css'

const Start = ({fieldVal, timeVal, setShowResult, setIsLoading, setPeriod}) =>{
 
  // 입력한 시간으로 훈련기간 계산
  const calcPeriod = (time) => {
    return setPeriod(parseInt(10000 / time));
  }

  // isLoading, showResult 상태 변경
  const handleShowResult = () => {
    if(timeVal > 24) {
      alert("잘못된 값입니다. 24이하의 값을 입력해 주세요.")
    } else if(timeVal === ""){
      alert("입력되지 않았습니다.")
    }else{
      if(fieldVal !== "" && timeVal !== "") {
        setIsLoading(true);
  
        setTimeout(() => {
          setIsLoading(false);
          setShowResult(true);
          calcPeriod(timeVal);
        }, 2000)
      }
    }
  }

    return(
        <div className={styles.start}>
          <Btn name="basic" onClick={handleShowResult}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
          <img src={fingerImg} alt="클릭" />
        </div>
    )
}

export default Start;




