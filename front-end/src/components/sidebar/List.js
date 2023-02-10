import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListStyle = styled.div`
  height: 40vh;
  padding: 20px;
`;

const List = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
      .get('/api/ships')
      .then((response) => {
        setShips(response.data);
      })
      .catch((error) => console.log(error));

    const timer = setInterval(() => {
      axios
        .get('/api/ships')
        .then((response) => {
          setShips(response.data);
        })
        .catch((error) => console.log(error));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const renderRow = (props) => {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <Link
          to={'/ship/' + ships[index].aisKey.ship.mmsi}
          style={{ color: 'white', textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemText
              primary={`MMSI ${ships[index].aisKey.ship.mmsi}
            ${ships[index].aisKey.ship.shipType === 70 ? '화물선' : '유조선'}`}
            />
          </ListItemButton>
        </Link>
      </ListItem>
    );
  };

  return (
    <ListStyle>
      <Box
        sx={{
          width: '15rem',
          bgcolor: 'rgb(0, 24, 107)',
          borderRadius: '5px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: 'bold',
            padding: '10px',
          }}
        >
          선박 리스트({ships.length})
        </div>
        <FixedSizeList
          height={300}
          width={240}
          itemSize={43}
          itemCount={ships.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </ListStyle>
  );
};

export default List;
