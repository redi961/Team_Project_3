import React from 'react';
import styled from 'styled-components';

const TitleSTyle = styled.div`
  height: 25vh;
  text-align: center;
  font-size: 40px;
  padding-top: 50px;
`;

const Title = () => {
  return (
    <TitleSTyle>
      선박 위치
      <br />
      예측 서비스
    </TitleSTyle>
  );
};

export default Title;
