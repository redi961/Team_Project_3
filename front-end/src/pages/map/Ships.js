import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const {kakao} = window;
const markers = [];
let marker = null;

const infoArray = [];
let infowindow = null;

const Ships = () => {
    const [ships, setShips] = useState([]);
    const [lat, setLat] = useState(35.050701);
    const [lng, setLng] = useState(129.170667);
    const [mapLevel, setMapLevel] = useState(10);
    const [kakaoMap, setKakaoMap] = useState();

    const navigate = useNavigate();

    //  인포윈도우를 표시하는 클로저를 만드는 함수입니다
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

    useEffect(() => {
        axios
            .get('/api/ships')
            .then((response) => {
                setShips(response.data);
            })
            .catch((error) => console.log(error));

        // axios   .get('/predict/ships')   .then((response) =>
        // console.log(response.data))   .catch((error) => console.log(error));

        const timer = setInterval(() => {
            axios
                .get('/api/ships')
                .then((response) => {
                    setShips(response.data);
                })
                .catch((error) => console.log(error));
        }, 10000);

        return() => clearInterval(timer);
    }, []);

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapOptions = {
            center: new kakao
                .maps
                .LatLng(lat, lng),
            level: mapLevel
        };

        const map = new kakao
            .maps
            .Map(mapContainer, mapOptions);
        setKakaoMap(map)
        // console.log("create map")
    }, [])

    useEffect(() => {

        // 마커를 표시할 위치와 mmsi 객체 배열입니다
        let positions = [];
        positions = ships.map((ship) => [
            ...positions, {
                content: ship,
                latlng: new kakao
                    .maps
                    .LatLng(ship.posY, ship.posX)
            }
        ]);

        // 재 렌더링시 중심 좌표값 / 지도 확대 레벨 고정
        if (kakaoMap != null) {
            kakao
                .maps
                .event
                .addListener(kakaoMap, 'zoom_changed', function () {
                    setMapLevel(kakaoMap.getLevel());
                });

            kakao
                .maps
                .event
                .addListener(kakaoMap, 'center_changed', function () {
                    setLat(kakaoMap.getCenter().getLat());
                    setLng(kakaoMap.getCenter().getLng());
                });
        }

        // 마커 이미지의 이미지 주소입니다
        let cargoImage = 'https://cdn-icons-png.flaticon.com/512/9565/9565467.png'; // 화물선
        let tankerImage = 'https://cdn-icons-png.flaticon.com/512/2942/2942056.png'; // 유조선
        let lossImage = 'https://cdn-icons-png.flaticon.com/512/3967/3967841.png';

        // 마커 중복 삭제
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers.length = 0;
        
        // 인포 윈도우 중복 삭제
        for (let i = 0; i < infoArray.length; i++) {
            infoArray[i].setMap(null);
        }
        infoArray.length = 0;

        //
        for (let i = 0; i < positions.length; i++) {
            let currentTime = moment();
            let shipSignalTime = moment(positions[i][0].content.aisKey.signal_date)
                .subtract(
                    9,
                    'hour'
                )
                .format('YYYY-MM-DD HH:mm:ss');

            // 소실 신호라 판단되면 예측하라고 요청
            moment
                .duration(currentTime.diff(shipSignalTime))
                .asMinutes() >= 5 && axios
                .post(
                        '/predict/ship/' + positions[i][0].content.aisKey.ship.mmsi
                    )
                .then((response) => {})
                .catch((error) => console.log(error));

            // 마커 이미지의 이미지 크기 입니다
            let imageSize = new kakao
                .maps
                .Size(25, 25);

            // 마커 이미지를 생성합니다
            let markerImage;
            moment
                .duration(currentTime.diff(shipSignalTime))
                .asMinutes() >= 5
                    ? (markerImage = new kakao.maps.MarkerImage(lossImage, imageSize))
                    : positions[i][0].content.aisKey.ship.shipType === 70
                        ? (markerImage = new kakao.maps.MarkerImage(cargoImage, imageSize))
                        : (markerImage = new kakao.maps.MarkerImage(tankerImage, imageSize));

            // 마커를 생성합니다
            marker = new kakao
                .maps
                .Marker({position: positions[i][0].latlng, // 마커를 표시할 위치
                    // title: positions[i][0].title,  마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image: markerImage, // 마커 이미지
                    clickable: true
                });
            markers.push(marker);
            marker.setMap(kakaoMap);

            // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
            let iwContent = `<div style="padding:5px;">
        <div><span style="font-weight:bold">MMSI</span><span>${positions[i][0]
                .content
                .aisKey
                .ship
                .mmsi}</span>
        </div>
        <div><span style="font-weight:bold">ShipType</span><span>${
                positions[i][0]
                .content
                .aisKey
                .ship
                .shipType === 70
                    ? '화물선'
                    : '유조선'}</span>
        </div></div>`;

            // 마커에 표시할 인포윈도우를 생성합니다
            infowindow = new kakao
                .maps
                .InfoWindow({
                    content: iwContent, // 인포윈도우에 표시할 내용
                });

            // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다 이벤트 리스너로는 클로저를 만들어 등록합니다 for문에서 클로저를
            // 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
            kakao
                .maps
                .event
                .addListener(
                    marker,
                    'mouseover',
                    makeOverListener(kakaoMap, marker, infowindow)
                );
            kakao
                .maps
                .event
                .addListener(marker, 'mouseout', makeOutListener(infowindow));

            infoArray.push(infowindow)

            // 마커에 클릭이벤트 등록
            kakao
                .maps
                .event
                .addListener(marker, 'click', function () {
                    navigate('/ship/' + positions[i][0].content.aisKey.ship.mmsi);
                });
        }
    }, [ships]);

    return (
        <>
            <div
                id="map"
                style={{
                    width: '100vw',
                    height: '100vh'
                }}></div>
        </>
    );
};

export default Ships;
