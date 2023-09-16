import styles from '../style/Title.module.css';
import React from 'react';
import titleImg from '../img/title.png';
import clockImg from '../img/clock.svg';


const Title = () =>{
    return(
        <div className={styles.title}>
          <img className={styles.clockImg} src={clockImg} alt="시계 배경이미지"/>
          <img className={styles.titleImg} src={titleImg} alt="1만 시간의 법칙"/>
        </div>
    )
}

export default Title;