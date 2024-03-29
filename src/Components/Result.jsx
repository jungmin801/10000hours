import React from 'react';
import Btn from './Button';
import styles from '../style/Result.module.css'

const Result = ({fieldVal, period, handleShowModal}) =>{

    // 공유하기 버튼 클릭 시 클립보드에 현재 페이지 URL 복사하기
    const copyURL = async ()=>{
        const currentURL = window.location.href;
        try{
            await navigator.clipboard.writeText(currentURL);
            alert("링크가 복사되었습니다.")
        }catch(error){
            console.error("복사 실패 : ", error)
        }
    }

    return(
        <div className={styles.result}>
            <div className={styles.wrapper}>
                <p>
                당신은
                <span className={styles.field}>{fieldVal}</span>
                전문가가 되기 위해서
                </p>
                <p>
                대략
                <span className={styles.time}>{period}</span>
                일 이상 훈련하셔야 합니다! :)
                </p>
            </div>
            <div className={styles.btns}>
                <Btn name="basic" onClick={handleShowModal}>훈련하러 가기 GO!GO!</Btn>
                <Btn name="share" onClick={copyURL}>공유하기</Btn>
            </div>  
        </div>
    )
}

export default Result;




