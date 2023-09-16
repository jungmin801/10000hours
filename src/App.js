import './App.css';
import React, { useState } from 'react';
import Title from './Components/Title';
import Intro from './Components/Intro';
import Inputs from './Components/Inputs';
import Start from './Components/Start';
import Footers from './Components/Footers';
import Result from './Components/Result';
import Modal from './Components/Modal';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
      font-family : var(--font-gmarketMedium), sans-serif;
      background-color: var(--purple);
      color: var(--white);
      font-size: 20px;
      margin: 0;  
    }

    input{
      font-family : inherit;
      font-size : inherit;
      border: none;
    }

    button{
      font-family : inherit;
    }

    blockquote, p, h1{
      margin: 0;
      padding: 0;
    }
`

function App() {
  const [fieldVal, setFieldVal] = useState("");
  const [timeVal, setTimeVal] = useState("");
  const [ready, setReady] = useState(false);
  const [period, setPeriod] = useState(0);
  const [isClosed, setIsClosed] = useState(true);

  // 모달창 닫힘 여부 제어하기
  const handleClosed = () => {
    return setIsClosed(!isClosed);
  }


  return (
    <>
      <GlobalStyle/>
      <main>
        <Title/>
        <Intro/>
        <Inputs fieldVal={fieldVal} setFieldVal={setFieldVal}  setTimeVal={setTimeVal}/>
        <Start ready={ready} setReady={setReady} fieldVal={fieldVal} timeVal={timeVal} period={period} setPeriod={setPeriod}/>
        {
          ready? <Result fieldVal={fieldVal} period={period} isClosed={isClosed} setIsClosed={setIsClosed} handleClosed={handleClosed}/> : null
        }
        {
          isClosed? null : <Modal isClosed={isClosed} setIsClosed={setIsClosed} handleClosed={handleClosed}/>
        }
      </main>
      <Footers/>
    </>
  );
}
export default App;


