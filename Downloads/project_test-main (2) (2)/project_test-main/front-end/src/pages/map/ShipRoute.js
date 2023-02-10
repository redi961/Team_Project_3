import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import DetailRoute from '../../components/map/DetailRoute';
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

// // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
const makeOverListener = (map, marker, infowindow) => {
  return function () {
    infowindow.open(map, marker);
  };
};

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
const makeOutListener = (infowindow) => {
  return function () {
    infowindow.close();
  };
};

const ShipRoute = () => {
  const [route, setRoute] = useState([]);
  const [ship, setShip] = useState({});
  const [lat, setLat] = useState(35.050701);
  const [lng, setLng] = useState(129.170667);
  const [mapLevel, setMapLevel] = useState(7);
  const [predicted, setPredicted] = useState([]);

  const { mmsi } = useParams();

  useEffect(() => {
    axios
      .get('/api/ship/mmsi/' + mmsi)
      .then((response) => {
        setShip(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get('/api/ship/route/' + mmsi)
      .then((response) => {
        setRoute(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get('/api/predict/ship/' + mmsi)
      .then((response) => {
        setPredicted(response.data);
      })
      .catch((error) => console.log(error));

    const timer = setInterval(() => {
      axios
        .get('/api/ship/route/' + mmsi)
        .then((response) => {
          setRoute(response.data);
        })
        .catch((error) => console.log(error));
      axios
        .get('/api/predict/ship/' + mmsi)
        .then((response) => {
          setPredicted(response.data);
        })
        .catch((error) => console.log(error));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

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

    // 마커를 표시할 위치
    let positions = [];
    positions = route.map((ship) => [
      ...positions,
      {
        content: ship,
        latlng: new kakao.maps.LatLng(ship.posY, ship.posX),
      },
    ]);

    // 예측 데이터 마커를 표시할 위치
    let predictedPositions = [];
    predictedPositions = predicted.map((ship) => [
      ...predictedPositions,
      {
        mmsi: ship.mmsi,
        cog: ship.cog,
        sog: ship.sog,
        predict_date: ship.predict_date,
        latlng: new kakao.maps.LatLng(ship.posY, ship.posX),
      },
    ]);

    // 마커 이미지의 이미지 주소입니다
    let cargoImage = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png'; // 화물선
    let tankerImage = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png'; // 유조선
    let lossImage = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png';

    var linePath;
    var lineLine = new kakao
        .maps
        .Polyline(); 

    // 정상 신호 위치 마커 생성
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(7, 7);
      if(i===positions.length-1){
      cargoImage = 'https://cdn-icons-png.flaticon.com/512/9565/9565467.png'; // 화물선
      tankerImage = 'https://cdn-icons-png.flaticon.com/512/2942/2942056.png'; // 유조선
      lossImage = 'https://cdn-icons-png.flaticon.com/512/3967/3967841.png';
      imageSize = new kakao.maps.Size(25, 25);
      }

      if (i != 0) {
        linePath = [
            positions[i - 1][0].latlng,
            positions[i][0].latlng
        ]
    };
    lineLine.setPath(linePath);

    var drawLine = new kakao
        .maps
        .Polyline({
            map: map, // 선을 표시할 지도입니다
            path: linePath,
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#db4040', // 선의 색깔입니다
            strokeOpacity: 0.75, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });

      // 마커 이미지를 생성합니다
      let markerImage;
      positions[i][0].content.aisKey.ship.shipType === 70
        ? (markerImage = new kakao.maps.MarkerImage(cargoImage, imageSize))
        : (markerImage = new kakao.maps.MarkerImage(tankerImage, imageSize));

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i][0].latlng, // 마커를 표시할 위치
        // title: positions[i][0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
      let iwContent = `
      <div style="padding:5px; font-size:14px; height:80px; width:230px;">
        <div>
          <span style="font-weight:bold;">Signal_date</span>
          <span>${moment(positions[i][0].content.aisKey.signal_date)
            .subtract(9, 'hour')
            .format('YYYY-MM-DD HH:mm:ss')}</span>
        </div>
        <div>
          <span style="font-weight:bold;">위도</span>
          <span>${positions[i][0].content.posY.toFixed(6)}</span>
        </div> 
        <div>
          <span style="font-weight:bold;">경도</span>
          <span>${positions[i][0].content.posX.toFixed(6)}</span>
        </div>
      </div>
      `;

      // 마커에 표시할 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow),
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow),
      );
    }

    // 예측 데이터 마커 생성
    for (let i = 0; i < predictedPositions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(lossImage, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: predictedPositions[i][0].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
      });

      // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
      let iwContent = `
      <div style="padding:5px; font-size:14px; height:80px; width:230px;">
        <div>
          <span style="font-weight:bold;">Predict_date</span>
          <span>${moment(predictedPositions[i][0].predict_date).format(
            'YYYY-MM-DD HH:mm:ss',
          )}</span>
        </div>
        <div>
          <span style="font-weight:bold;">위도</span>
          <span>${predictedPositions[i][0].latlng.Ma}</span>
        </div> 
        <div>
          <span style="font-weight:bold;">경도</span>
          <span>${predictedPositions[i][0].latlng.La}</span>
        </div>
      </div>
      `;

      // 마커에 표시할 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow),
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow),
      );
    }
  }, [route]);

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
        <DetailRoute ship={ship} />
      </DetailStyle>
    </>
  );
};

export default ShipRoute;
