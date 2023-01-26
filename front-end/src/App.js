import React from 'react';
import './App.css';
import Sidebar from './pages/Sidebar';
import KakaoMap from './pages/KakaoMap';
import styled from 'styled-components';

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <>
      <Main>
        <Sidebar />
        <KakaoMap />
      </Main>
    </>
  );
}

export default App;
