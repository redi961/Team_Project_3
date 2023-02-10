import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const DetailWeather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        'http://www.khoa.go.kr/api/oceangrid/buObsRecent/search.do?ServiceKey=yKqx3L4r4GYGq47m/a05g==&ObsCode=TW_0062&ResultType=json',
      )
      .then((response) => {
        setWeather({ ...weather, ...response.data.result.data });
      })
      .catch((error) => console.log(error));

    const timer = setInterval(() => {
      axios
        .get(
          'http://www.khoa.go.kr/api/oceangrid/buObsRecent/search.do?ServiceKey=yKqx3L4r4GYGq47m/a05g==&ObsCode=TW_0062&ResultType=json',
        )
        .then((response) => {
          setWeather({ ...weather, ...response.data.result.data });
        })
        .catch((error) => console.log(error));
    }, 60000); // 1분

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let currentDate = new Date();
    weather.record_time &&
      axios
        .post(
          '/api/weather',
          {
            real_time: currentDate.setHours(currentDate.getHours() + 9),
            record_time: weather.record_time,
            wave_height: weather.wave_height,
            wind_dir: weather.wind_dir,
            wind_speed: weather.wind_speed,
            current_dir: weather.current_dir,
            current_speed: weather.current_speed,
          },
          {
            headers: { 'Content-Type': 'application/json' },
          },
        )
        .then()
        .catch((error) => console.log(error));
  }, [weather]);

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
          해양 기상 정보
        </Card.Title>
        <Table>
          <tbody style={{ color: 'white' }}>
            <tr>
              <td style={{ width: '50%' }}>관측시간</td>
              <td>{weather ? weather.record_time : null}</td>
            </tr>
            <tr>
              <td>풍향(deg)</td>
              <td>{weather ? weather.wind_dir : null}</td>
            </tr>
            <tr>
              <td>풍속(m/s)</td>
              <td>{weather ? weather.wind_speed : null}</td>
            </tr>
            <tr>
              <td>유향(deg)</td>
              <td>{weather ? weather.current_dir : null}</td>
            </tr>
            <tr>
              <td>유속(cm/s)</td>
              <td>{weather ? weather.current_speed : null}</td>
            </tr>
            <tr>
              <td>파고(m)</td>
              <td>{weather ? weather.wave_height : null}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DetailWeather;
