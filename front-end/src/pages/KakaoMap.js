import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { kakao } = window;

const KakaoMap = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios
      .get('/api/ais')
      .then((response) => {
        setShips(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(35.050701, 129.170667),
      level: 10,
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);

    // 마커를 표시할 위치와 mmsi 객체 배열입니다
    let positions = [];
    positions = ships.map((ship) => [
      ...positions,
      {
        title: `${ship.aisKey.ship.mmsi}`,
        latlng: new kakao.maps.LatLng(ship.posY, ship.posX),
      },
    ]);

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i][0].latlng, // 마커를 표시할 위치
        title: positions[i][0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, [ships]);

  return (
    <>
      <div
        id="map"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      ></div>
    </>
  );
};

export default KakaoMap;
