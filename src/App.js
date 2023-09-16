import "./App.css";
import React, { useState } from "react";
import Title from "./Components/Title";
import Intro from "./Components/Intro";
import Inputs from "./Components/Inputs";
import Start from "./Components/Start";
import Footers from "./Components/Footers";
import Result from "./Components/Result";
import Modal from "./Components/Modal";
import Loading from "./Components/Loading";
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
`;

function App() {
  const [fieldVal, setFieldVal] = useState("");
  const [timeVal, setTimeVal] = useState("");
  const [period, setPeriod] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(true);

  // 모달창 닫힘 여부 제어하기
  const handleShowModal = () => {
    return setShowModal(!showModal);
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <Title />
        <Intro />
        <Inputs
          fieldVal={fieldVal}
          setFieldVal={setFieldVal}
          setTimeVal={setTimeVal}
        />
        <Start
          fieldVal={fieldVal}
          timeVal={timeVal}
          period={period}
          setShowResult={setShowResult}
          setIsLoading={setIsLoading}
          setPeriod={setPeriod}
        />
        {isLoading && <Loading />}
        {!isLoading && showResult ? (
          <Result
            fieldVal={fieldVal}
            period={period}
            handleShowModal={handleShowModal}
          />
        ) : null}
        {!showModal && <Modal handleShowModal={handleShowModal} />}
      </main>
      <Footers />
    </>
  );
}
export default App;
