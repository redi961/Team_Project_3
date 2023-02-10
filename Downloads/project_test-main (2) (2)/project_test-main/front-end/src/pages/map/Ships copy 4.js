import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const {kakao} = window;
const circleArray = [];
var circle = null;

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
                // console.log(response.data)
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
        }, 100);

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
        let positions = [];
        positions = ships.map((ship) => [
            ...positions, {
                content: ship,
                latlng: new kakao
                    .maps
                    .LatLng(ship.posY, ship.posX)
            }
        ]);

        console.log("circleArray:", circleArray);
        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].setMap(null);
        }
        circleArray.length = 0;

        for (let i = 0; i < positions.length; i++) {
            if (positions[0] == null || positions[0][0] == null) continue;

            circle = new kakao
                .maps
                .Circle({map: kakaoMap, center: positions[i][0].latlng,
                    radius: 100,
                    strokeWeight: 2,
                    strokeColor: 'red',
                    strokeOpacity: 1,
                    fillOpacity: 0
                });
            circleArray.push(circle);
            circle.setMap(kakaoMap);
        }


    }, [ships])

    return (
        <div>
            <div
                id="map"
                style={{
                    width: '100vw',
                    height: '100vh'
                }}></div>
        </div>
    );
};

export default Ships;