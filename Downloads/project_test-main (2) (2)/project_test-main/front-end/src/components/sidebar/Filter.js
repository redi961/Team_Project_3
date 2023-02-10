import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const FilterStyle = styled.div`
  height: 33vh;
`;

const Filter = () => {
  const navigate = useNavigate();

  const shipTypeAll = () => {
    navigate('/');
  };

  const shipTypeCargo = () => {
    navigate('/ships/70');
  };

  const shipTypeTanker = () => {
    navigate('/ships/80');
  };

  const shipTypeLoss = () => {
    navigate('/ships/loss');
  };

  return (
    <FilterStyle>
      <Card style={{ width: '15rem', backgroundColor: 'rgb(0, 24, 107)' }}>
        <Card.Body>
          <Card.Title
            style={{
              textAlign: 'center',
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          >
            필터
          </Card.Title>
          <Card.Text
            style={{
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="primary"
              style={{ margin: '10px', width: '80%' }}
              onClick={shipTypeAll}
            >
              전체
            </Button>
            <Button
              variant="primary"
              style={{ margin: '10px', width: '80%' }}
              onClick={shipTypeTanker}
            >
              유조선&nbsp;&nbsp;
              <img
                src="https://cdn-icons-png.flaticon.com/512/2942/2942056.png"
                style={{ width: '25px', height: '25px' }}
                alt="유조선"
              ></img>
            </Button>
            <Button
              variant="primary"
              style={{ margin: '10px', width: '80%' }}
              onClick={shipTypeCargo}
            >
              화물선&nbsp;&nbsp;
              <img
                src="https://cdn-icons-png.flaticon.com/512/9565/9565467.png"
                style={{ width: '25px', height: '25px' }}
                alt="화물선"
              ></img>
            </Button>
            <Button
              variant="primary"
              style={{ margin: '10px', width: '80%' }}
              onClick={shipTypeLoss}
            >
              신호 소실&nbsp;&nbsp;
              <img
                src="https://cdn-icons-png.flaticon.com/512/3967/3967841.png"
                style={{ width: '25px', height: '25px' }}
                alt="화물선"
              ></img>
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </FilterStyle>
  );
};

export default Filter;
