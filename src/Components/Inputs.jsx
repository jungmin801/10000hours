import React from "react";
import styled from "styled-components";
import styles from "../style/Inputs.module.css";

const InputBox = styled.input`
  border-radius: 7px;
  padding: 17px 0;
  text-align: center;
  margin: 0 15px;
`;

const Inputs = ({fieldVal, setFieldVal, timeVal, setTimeVal}) => {
  return (
    <div className={styles.inputArea}>
      <div className={styles.field}>
        <p>나는
        <InputBox
          type="text"
          placeholder="예)프로그래밍"
          value={fieldVal}
          onChange={(event) => {setFieldVal(event.target.value);}}
        />
        전문가가 될 것이다</p>
      </div>
      <div className={styles.time}>
        <p>그래서 앞으로 매일 하루에
        <InputBox
          type="number"
          placeholder="예)5시간"
          value={timeVal}
          onChange={(event) => {setTimeVal(event.target.value)}}
        />
          시간씩 훈련할 것이다.</p>
      </div>
    </div>
  );
};

export default Inputs;
