/* global kakao */
import React, {useEffect, useState} from 'react';
import './MapTest.css';
import axios from 'axios';

const {kakao} = window;

const MapTest = () => {

    const [hello, setHello] = useState('')

    useEffect(() => {
        axios
            .get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
        }, []);

    let [x, setx] = useState(35);
    let [y, sety] = useState(129);

    useEffect(() => {
        const id = setInterval(() => {
            setx(x + 0.002);
            sety(y + 0.02);            
        }, 1000);
        return() => clearInterval(id);
    }, [x, y]);

    var imageSrc = 'https://cdn-icons-png.flaticon.com/512/2639/2639441.png', // 마커이미지의 주소입니다
        imageSize = new kakao
            .maps
            .Size(25, 25), // 마커이미지의 크기입니다
        imageOption = {
            offset: new kakao
                .maps
                .Point(12.5, 12.5)
        }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 이미지사이즈  옵션 크기 똑같이 설정할것

    var markerImage = new kakao
            .maps
            .MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao
            .maps
            .LatLng(x, y); // 마커가 표시될 위치입니다

    //처음 지도 그리기
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao
                    .maps
                    .LatLng(x, y), // 지도의 중심좌표
                level: 12 // 지도의 확대 레벨
            };

        var map = new kakao
            .maps
            .Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
        var positions = [
            {
                content: ""+hello,
                latlng: new kakao
                    .maps
                    .LatLng(x, y)
            }
        ];

        for (var i = 0; i < positions.length; i++) {
            // 마커를 생성합니다
            var marker = new kakao
                .maps
                .Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커의 위치
                    image: markerImage
                });

            // 마커에 표시할 인포윈도우를 생성합니다
            var infowindow = new kakao
                .maps
                .InfoWindow({
                    content: positions[i].content // 인포윈도우에 표시할 내용
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
    }, [x])

    return (
        <div id="mapzone">
            <div id="map"></div>
        </div>
    );
};
export default MapTest;