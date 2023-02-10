import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const {kakao} = window;

const Ships = () => {
    const [ships, setShips] = useState([]);
    const [lat, setLat] = useState(35.050701);
    const [lng, setLng] = useState(129.170667);
    const [mapLevel, setMapLevel] = useState(10);
    const [kakaoMap, setKakaoMap] = useState();
    const circleArray = [];

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
        // console.log("call ship")
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
        console.log("circleArray : ",circleArray);
        for(let i = 0; i<circleArray.length;i++){
          
          circleArray[i].setMap(null);
        }

        circleArray.length = 0;
        

        for (let i = 0; i < positions.length; i++) {
            
            // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
            // var linePath = [
            //     new kakao
            //         .maps
            //         .LatLng(35.050701, 129.170667),
            //     new kakao
            //         .maps
            //         .LatLng(35.021701, 129.181667),
            //     new kakao
            //         .maps
            //         .LatLng(35.012701, 129.192667)
            // ];
            //지도에 표시할 선을 생성합니다
            // var polyline = new kakao
            //     .maps
            //     .Polyline({
            //         //path: linePath,  선을 구성하는 좌표배열 입니다
            //         strokeWeight: 1, // 선의 두께 입니다
            //         strokeColor: 'green', // 선의 색깔입니다
            //         strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            //         strokeStyle: 'solid' // 선의 스타일입니다
            //     });

            // // 지도에 선을 표시합니다
            // polyline.setPath(positions[i]);
            // polyline.setMap(kakaoMap);
        // }

        // console.log("1 : ",positions)
        if(positions[0]!=null && positions[0][0]!=null){

          
          
        var circle = new kakao.maps.Circle({
          map: kakaoMap,
          center : positions[i][0].latlng,
          radius: 100,
          strokeWeight: 2,
          strokeColor: '#FF00FF',
          strokeOpacity: 0.8,
          strokeStyle: 'dashed',
          fillColor: '#00EEEE',
          fillOpacity: 0.5 
      });
      
      circle.setMap(kakaoMap);
      circleArray.push(circle);      
      
      
    }

        // console.log("line",linePath);
        // console.log("positions",positions);
  }
    }, [ships]);

    return (
    <>
     <div id = "map" style = {{
          width: '100vw',
          height: '100vh',
        }} > </div> 
        </>
    );
};

export default Ships;