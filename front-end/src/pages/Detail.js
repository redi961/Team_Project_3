import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../styles/info.css'

const { kakao } = window;

const KakaoMap = () => {
  const [ships, setShips] = useState([]);
  
  /*
  const callShip = () => {
    axios
    .get('/api/ais')
    .then((response) => {
      setShips(response.data);        
    })
    .catch((error) => console.log(error));
  }
*/
  async function syncShip () {
    try {
      const resp = await axios.get('/api/ais')
      .then((response) => {
        setShips(response.data);
        return resp
      })
    }catch(error) {
      console.error(error)
    }
  }

  // 수정 1번 
  useEffect(() => {
    const id = setInterval(async() => {
      syncShip();
    },10000);
    return() => clearInterval(id);
  }, [ships]);

  useEffect(() => {

    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(35.05152, 129.030667),
      level: 6,
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);  

    // 마커를 표시할 위치와 mmsi 객체 배열입니다
    let positions = [];
    positions = ships.map((ship) => [
      ...positions,
      {
        title: `${ship.aisKey.ship.mmsi}`, 
        latlng: new kakao.maps.LatLng(ship.posY, ship.posX),
        type : `${ship.aisKey.ship.shipType}`,
        name : `${ship.aisKey.ship.shipName}`,
        speed : `${ship.sog}`,
        posX : `${ship.posX}`,
        posY : `${ship.posY}`
      },
    ]);

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      'https://cdn-icons-png.flaticon.com/512/2639/2639441.png';    

    
    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(25, 25);     

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      console.log(positions[i])

     /* if (ships[i].aisKey.ship.shipType == 80) {
      }else{continue}*/

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i][0].latlng, // 마커를 표시할 위치
        title: positions[i][0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지    
      });      

    // 마커에 표시할 인포윈도우를 생성합니다
    let vw = "<div class = 'wrap'>" + 
              "<div class ='name'>" + ships[i].aisKey.ship.shipName + "<div/>" +
              "</div> </div>" +
              "<div class = 'desc'>" +
              "<div>" + "선박 ID : " + positions[i][0].title + "</div>" +
              "<div>" + "선박 타입 : " + positions[i][0].type + "</div>" +
              "<div>" + "현재 속도 : " + positions[i][0].speed + "</div>" +
              "<div>" + "pos X :" + positions[i][0].posY + "</div>" +
              "<div>" + "pos Y :" + positions[i][0].posX + "</div>" +
              "</div>"  ;
    var infowindow = new kakao
    .maps
    .InfoWindow({
        content : vw
        // 인포윈도우에 표시할 내용
    });

// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다 이벤트 리스너로는 클로저를 만들어 등록합니다 for문에서 클로저를
// 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
kakao
    .maps
    .event
    .addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
kakao
    .maps
    .event
    .addListener(marker, 'mouseout', makeOutListener(infowindow));
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
  return function () {
      infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
      infowindow.close();
  };
}
  }, [ships]);

  return (
    <>
    <Sidebar/>
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