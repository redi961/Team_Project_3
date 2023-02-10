import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SearchStyle = styled.div`
  height: 5vh;
  width: 70%;
`;

const Search = () => {
  const navigate = useNavigate();
  const [mmsi, setMmsi] = useState();

  const changeValue = (e) => {
    setMmsi(e.target.value);
  };

  const searchShip = (e) => {
    e.preventDefault();
    navigate('/ship/' + mmsi);
  };

  return (
    <SearchStyle>
      <Form className="d-flex" onSubmit={searchShip}>
        <Form.Control
          type="text"
          placeholder="Enter MMSI"
          className="me-2"
          name="mmsi"
          onChange={changeValue}
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </SearchStyle>
  );
};

export default Search;
