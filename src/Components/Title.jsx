import styles from '../style/Title.module.css';
import React from 'react';
import titleImgSrc from '../img/title.png';
import clockImgSrc from '../img/clock.svg';


const Title = () =>{
    return(
        <div className={styles.title}>
          <img className={styles.clockImg} src={clockImgSrc} alt="시계 배경이미지"/>
          <img className={styles.titleImg} src={titleImgSrc} alt="1만 시간의 법칙"/>
        </div>
    )
}

export default Title;