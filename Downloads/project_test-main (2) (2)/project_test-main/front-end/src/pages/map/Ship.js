import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Detail from '../../components/map/Detail';
import moment from 'moment';

const { kakao } = window;

const DetailStyle = styled.div`
  position: absolute;
  top: 10px;
  right: 170px;
  z-index: 5;
  width: 80px;
  border-radius: 10%;
  background-color: rgb(0, 24, 107);
  color: white;
`;

const Ship = () => {
  const [ship, setShip] = useState({});
  const [lat, setLat] = useState(35.050701);
  const [lng, setLng] = useState(129.170667);
  const [mapLevel, setMapLevel] = useState(10);

  const { mmsi } = useParams();

  useEffect(() => {
    axios
      .get('/api/ship/mmsi/' + mmsi)
      .then((response) => {
        setShip(response.data);
      })
      .catch((error) => console.log(error));

    const timer = setInterval(() => {
      axios
        .get('/api/ship/mmsi/' + mmsi)
        .then((response) => {
          setShip(response.data);
        })
        .catch((error) => console.log(error));
    }, 10000);

    return () => clearInterval(timer);
  }, [mmsi]);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(lat, lng),
      level: mapLevel,
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions);

    kakao.maps.event.addListener(map, 'zoom_changed', function () {
      setMapLevel(map.getLevel());
    });

    kakao.maps.event.addListener(map, 'center_changed', function () {
      setLat(map.getCenter().getLat());
      setLng(map.getCenter().getLng());
    });

    // 마커를 표시할 위치와 mmsi 객체 배열입니다
    let markerPosition = new kakao.maps.LatLng(ship.posY, ship.posX);

    // 마커 이미지의 이미지 주소입니다
    let cargoImage = 'https://cdn-icons-png.flaticon.com/512/9565/9565467.png'; // 화물선
    let tankerImage = 'https://cdn-icons-png.flaticon.com/512/2942/2942056.png'; // 유조선
    let lossImage = 'https://cdn-icons-png.flaticon.com/512/3967/3967841.png';

    let currentTime = moment();
    let shipSignalTime;
    ship.aisKey
      ? (shipSignalTime = moment(ship.aisKey.signal_date)
          .subtract(9, 'hour')
          .format('YYYY-MM-DD HH:mm:ss'))
      : (shipSignalTime = moment());

    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(24, 30);

    // 마커 이미지를 생성합니다
    let markerImage;
    ship && moment.duration(currentTime.diff(shipSignalTime)).asMinutes() >= 5
      ? (markerImage = new kakao.maps.MarkerImage(lossImage, imageSize))
      : ship.aisKey && ship.aisKey.ship.shipType === 70
      ? (markerImage = new kakao.maps.MarkerImage(cargoImage, imageSize))
      : (markerImage = new kakao.maps.MarkerImage(tankerImage, imageSize));

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: markerPosition, // 마커를 표시할 위치
      // title: positions[i][0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
  }, [ship]);

  return (
    <>
      <div
        id="map"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      ></div>

      <DetailStyle>
        <Detail ship={ship} />
      </DetailStyle>
    </>
  );
};

export default Ship;
