import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DetailStyle = styled.div`
  padding-top: 40px;
  height: 40vh;
`;

const Detail = () => {
  return (
    <DetailStyle>
      <Card style={{ width: '15rem', backgroundColor: 'rgb(0, 24, 107)' }}>
        <Card.Body>
          <Card.Title
            style={{
              textAlign: 'center',
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          >
            상세 정보
          </Card.Title>
          <Card.Text>ShipName</Card.Text>
          <Card.Text>ShipType</Card.Text>
          <Card.Text>Speed</Card.Text>
          <Card.Text>Direction</Card.Text>
          <Card.Text>Latitude</Card.Text>
          <Card.Text>Longitude</Card.Text>
          <Button variant="primary" style={{ marginLeft: '110px' }}>
            상세 경로
          </Button>
        </Card.Body>
      </Card>
    </DetailStyle>
  );
};

export default Detail;
