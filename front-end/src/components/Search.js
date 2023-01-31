import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchStyle = styled.div`
  height: 10vh;
  width: 80%;  
`;

const Search = () => {
  return (
    <SearchStyle>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Enter MMSI"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </SearchStyle>
  );
};

export default Search;
