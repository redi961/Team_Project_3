import React from 'react';
import './App.css';
import KakaoMap from './pages/KakaoMap';
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom'

const Main = styled.div
`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
  <>
    <Main>
      <Routes>
        <Route path = '/' element = {<KakaoMap/>}/>
      </Routes>
    </Main>
    
  </>
);
}

export default App;
