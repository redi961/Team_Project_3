import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const DetailRoute = (props) => {
  const ship = props.ship;
  const navigate = useNavigate();

  const shipRoute = () => {
    navigate('/ship/route/' + ship.aisKey.ship.mmsi);
  };

  return (
    <Card style={{ width: '15rem', backgroundColor: 'rgb(0, 24, 107)' }}>
      <Card.Body>
        <Card.Title
          style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: 'bold',
          }}
        >
          선박 상세 정보
        </Card.Title>
        <Table>
          <tbody style={{ color: 'white' }}>
            <tr>
              <td>MMSI</td>
              <td>{ship.aisKey ? ship.aisKey.ship.mmsi : null}</td>
            </tr>
            <tr>
              <td>ShipName</td>
              <td>{ship.aisKey ? ship.aisKey.ship.shipName : null}</td>
            </tr>
            <tr>
              <td>ShipType</td>
              <td>
                {ship.aisKey
                  ? ship.aisKey.ship.shipType === 70
                    ? '화물선'
                    : '유조선'
                  : null}
              </td>
            </tr>
            <tr>
              <td>Speed(kn)</td>
              <td>{ship.aisKey ? ship.sog.toFixed(6) : null}</td>
            </tr>
            <tr>
              <td>Direction</td>
              <td>{ship.aisKey ? ship.cog.toFixed(6) : null}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{ship.aisKey ? ship.posY.toFixed(6) : null}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{ship.aisKey ? ship.posX.toFixed(6) : null}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DetailRoute;
