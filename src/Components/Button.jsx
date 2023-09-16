import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 40px;
  border: none;  
  font-family: var(--font-gmarketBold), var(--font-gmarketMedium), sans-serif;
  font-size: 20px;
  border-radius: 30px;
  color: #5B2386;
  background-color: ${(props) => props.name === "basic"? "#FCEE21" : "#fff"};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  cursor: pointer;
`;


export default Btn;