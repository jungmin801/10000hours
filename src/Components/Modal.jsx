import React from 'react';
import Btn from './Button';
import licatImg from '../img/licat.png'
import styles from '../style/Modal.module.css'


function Modal({handleShowModal}) {
    return (
      <div className={styles.modal}>
          <div className={styles.cheer}>
            <p>파이팅!!♥♥♥</p>
            <p>당신의 꿈을 응원합니다!</p>
          </div>
          <img src={licatImg}alt="라이캣"/>
          <Btn name="basic" onClick={handleShowModal}>종료하고 진짜 훈련하러 가기 GO!GO!</Btn>
      </div>
    );
  }
  export default Modal;
  