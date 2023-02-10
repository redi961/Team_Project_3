import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../styles/info.css'

const {kakao} = window;

const KakaoMap = () => {
    const [ships, setShips] = useState([]);
    const [posx, set_posX] = useState(35.05152);
    const [posy, set_posY] = useState(129.030667);
    const [level, setlevel] = useState(7);
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

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
    async function syncShip() {
        try {
            const resp = await axios
                .get('/api/ais')
                .then((response) => {
                    setShips(response.data);
                    return resp
                })
        } catch (error) {
            console.error(error)
        }
    }

    // 수정 1번
    useEffect(() => {
        const id = setInterval(async () => {
            syncShip();
        }, 10000);
        return() => clearInterval(id);
    }, [ships]);

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapOptions = {
            center: new kakao
                .maps
                .LatLng(posx, posy),
            level: level
        };
        const map = new kakao
            .maps
            .Map(mapContainer, mapOptions);

        // 마커를 표시할 위치와 mmsi 객체 배열입니다
        let positions = [];
        positions = ships.map((ship) => [
            ...positions, {
                title: `${ship.aisKey.ship.mmsi}`,
                latlng: new kakao
                    .maps
                    .LatLng(ship.posY, ship.posX),
                type: `${ship.aisKey.ship.shipType}`,
                name: `${ship.aisKey.ship.shipName}`,
                speed: `${ship.sog}`,
                posX: `${ship.posX}`,
                posY: `${ship.posY}`
            }
        ]);

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = 'https://cdn-icons-png.flaticon.com/512/254/254157.png';

        for (var i = 0; i < positions.length; i++) {

            // 타입에 따른 선박종류 명시
            if (positions[i][0].type == "80") {
                positions[i][0].type = "유조선"
                var imageSrc = 'https://cdn-icons-png.flaticon.com/512/2942/2942056.png';
            } else if (positions[i][0].type == "70") {
                positions[i][0].type = "화물선"
                var imageSrc = 'https://cdn-icons-png.flaticon.com/512/9565/9565467.png';
            }

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao
                .maps
                .Size(25, 25);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao
                .maps
                .MarkerImage(imageSrc, imageSize);

            //fillter

            if (x == 1) {
                if (ships[i].aisKey.ship.shipType == 80) {} else {
                    continue
                }
            } else if (x == 2) {
                if (ships[i].aisKey.ship.shipType == 70) {} else {
                    continue
                }
            } else if (x == 3) {
                if (ships[i].aisKey.ship.shipType == 70 || ships[i].aisKey.ship.shipType == 80) {} else {
                    continue
                }
            } else if (x == 0) {
                if (ships[i].aisKey.ship.shipType == 0) {} else {
                    continue
                }
            }

            // 마커를 생성합니다
            var marker = new kakao
                .maps
                .Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i][0].latlng, // 마커를 표시할 위치
                    title: positions[i][0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage, // 마커 이미지
                    clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
                });

            // 중심좌표 부드럽게 이동 함수
            function panTo(x, y) {
                var moveLatLon = new kakao
                    .maps
                    .LatLng(x, y);
                map.panTo(moveLatLon);
            }

            // 클릭시 중심좌표 해당 선함으로 이동
            kakao
                .maps
                .event
                .addListener(marker, 'click', function () {
                    this.getPosition()
                    let x = this.getPosition().getLat()
                    let y = this.getPosition().getLng()

                    panTo(x, y)
                    set_posX(x)
                    set_posY(y)
                });

            //랜더링시 지도 확대레벨 고정
            kakao
                .maps
                .event
                .addListener(map, 'zoom_changed', function () {
                    var level = map.getLevel();
                    setlevel(level)
                });

            //중심좌표값 변화에 따른 랜더링시 지도 위치 고정
            kakao
                .maps
                .event
                .addListener(map, 'center_changed', function () {
                    var level = map.getLevel();
                    var latlng = map.getCenter();

                    set_posX(latlng.getLat())
                    set_posY(latlng.getLng())
                    setlevel(level)
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
                    content: vw
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
        < Sidebar info = {{x,setX,y,setY,syncShip}}/>
        <div
            id="map"
            style={{
                width: '100vw',
                height: '100vh',
            }}
        ></div > 
        </>
    );
};

export default KakaoMap;