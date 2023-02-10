import React from 'react';
import './App.css';
import Ships from './pages/map/Ships';
import ShipType from './pages/map/ShipType';
import Ship from './pages/map/Ship';
import ShipRoute from './pages/map/ShipRoute';
import ShipLoss from './pages/map/ShipLoss';
import Sidebar from './pages/sidebar/SideBar';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import DetailWeather from './components/map/DetailWeather';

const MainStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const DetailStyle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 170px;
  z-index: 5;
  width: 80px;
  border-radius: 10%;
  background-color: rgb(0, 24, 107);
  color: white;
`;

function App() {
  return (
    <MainStyle>
      <Sidebar />
      <DetailStyle>
        <DetailWeather />
      </DetailStyle>
      <Routes>
        <Route path="/" exact={true} element={<Ships />} />
        <Route path="/ships/:shipType" exact={true} element={<ShipType />} />
        <Route path="/ships/loss" exact={true} element={<ShipLoss />} />
        <Route path="/ship/:mmsi" exact={true} element={<Ship />} />
        <Route path="/ship/route/:mmsi" exact={true} element={<ShipRoute />} />
      </Routes>
    </MainStyle>
  );
}

export default App;
