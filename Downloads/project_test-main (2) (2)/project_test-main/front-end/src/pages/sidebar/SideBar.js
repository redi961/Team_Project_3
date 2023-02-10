import React from 'react';
import styled from 'styled-components';
import Title from '../../components/sidebar/Title';
import Search from '../../components/sidebar/Search';
import Filter from '../../components/sidebar/Filter';
import List from '../../components/sidebar/List';

const Main = styled.div`
  height: 100vh;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #173d9a;
  color: white;
`;

const SideBar = () => {
  return (
    <Main>
      <Title />
      <Search />
      <Filter />
      <List />
    </Main>
  );
};

export default SideBar;
