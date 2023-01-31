import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const FilterStyle = styled.div`
  height: 20vh;
  padding: 20px;
`;

const checkBostList = ['화물선', '여객선']

const Filter = () => {
  return (
    <FilterStyle>
      <Card style={{ width: '15rem', backgroundColor: 'rgb(0, 24, 107)'}}>
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
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Card.Text style={{ padding: '10px' }}>
              <div>ShipType</div>
              <Form.Check type="checkbox" label="화물선" />
              <Form.Check type="checkbox" label="여객선" />
            </Card.Text>
            <Card.Text style={{ padding: '10px' }}>
              <div>Loss signal</div>
              <Form.Check type="checkbox" label="O" />
              <Form.Check type="checkbox" label="X" />
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </FilterStyle>
  );
};

export default Filter;
