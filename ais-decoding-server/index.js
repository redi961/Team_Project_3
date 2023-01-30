const express = require("express");
const app = express();
const WebSocket = require("ws");
const proto = require("./js/web_gis_message");
const mysql = require("mysql");
const getConnection = require("./config/db_config");
const proj4 = require("proj4");

app.get("/", (req, res) => {
  const AIS_SERVER = "ws://localhost:9001";

  let socket = new WebSocket(AIS_SERVER);
  socket.binaryType = "arraybuffer";

  socket.onopen = () => {
    console.log("AIS 서버 접속 완료");
  };

  getConnection((conn) => {
    socket.onmessage = (msg) => {
      let buf = new Uint8Array(msg.data).buffer;
      if (buf.byteLength > 60) {
        const array1 = buf.slice(0, 4);
        let dateSize = new Uint32Array(array1)[0];
        const array3 = buf.slice(8, dateSize + 8);
        let realData = new Uint8Array(array3);
        let ais = proto.web_gis.AIS_BASE.decode(realData);

        // 좌표계 변환
        const epsg3857 =
          "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs";
        const epsg4326 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ";
        const tPos = proj4(epsg3857, epsg4326, [ais.posX, ais.posY]);
        ais.posX = tPos[0];
        ais.posY = tPos[1];
        console.log(ais);

<<<<<<< HEAD
        if(ais.shipType != 0){
          let sql1 = `insert into ship (mmsi, shipName, shipType) values (
            ${ais.mmsi}, '${ais.shipName}', ${ais.shipType});`;
  
          conn.query(sql1, (err, rows, fields) => {
            if (err) {
              console.log("error connecting : " + err.stack);
            }
            console.log(sql1);
          });
  
          let sql2 = `insert into ais (mmsi, posX, posY, sog, cog) values (
            ${ais.mmsi}, ${ais.posX}, ${ais.posY}, ${ais.sog}, ${ais.cog});`;
  
          conn.query(sql2, (err, rows, fields) => {
            if (err) {
              console.log("error connecting : " + err.stack);
            }
            console.log(sql2);
          });
        }        
=======
        let sql1 = `insert into ship (mmsi, shipName, shipType) values (
          ${ais.mmsi}, '${ais.shipName}', ${ais.shipType});`;

        conn.query(sql1, (err, rows, fields) => {
          if (err) {
            console.log("error connecting : " + err.stack);
          }
          console.log(sql1);
        });

        let sql2 = `insert into ais (mmsi, posX, posY, sog, cog) values (
          ${ais.mmsi}, ${ais.posX}, ${ais.posY}, ${ais.sog}, ${ais.cog});`;

        conn.query(sql2, (err, rows, fields) => {
          if (err) {
            console.log("error connecting : " + err.stack);
          }
          console.log(sql2);
        });
>>>>>>> 257240f (ais-decoding-server)
      }
    };
    conn.release();
  });

  socket.onclose = () => {
    console.log("ais 스트리밍 종료");
    return;
  };
});

app.listen(8000, () => {
  console.log("Listening at 8000");
});
