import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Detail from '../components/Detail';

const Main = styled.div`
  height: 100vh;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #173d9a;
  color: white;
`;

const Sidebar = () => {
  return (
    <Main>
      <Title />
      <Search />
      <Filter />
      <Detail />
    </Main>
  );
};

export default Sidebar;
