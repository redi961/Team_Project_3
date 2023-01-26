import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axios
      .get('/api/hello')
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
};

export default Test;
