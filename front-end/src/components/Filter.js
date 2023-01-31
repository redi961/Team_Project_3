import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useContext, useState} from 'react';

const FilterStyle = styled.div `
  height: 20vh;
  padding: 20px;
`;
const Filter = (probs) => {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);    

    const toggle1 = () => {first == true? setFirst(false): setFirst(true);
      probs.info.probs.info.syncShip()}
    const toggle2 = () => {second == true? setSecond(false): setSecond(true);
      probs.info.probs.info.syncShip()}
    
    if (first == true && second == false) 
        probs.info.probs.info.setX(1)
    else if (first == false && second == true) 
        probs.info.probs.info.setX(2)
    else if (first == true && second == true)
        probs.info.probs.info.setX(3)
    else 
        probs.info.probs.info.setX(0)

    return (
        <FilterStyle>
            <Card
                style={{
                    width: '15rem',
                    backgroundColor: 'rgb(0, 24, 107)'
                }}>
                <Card.Body>
                    <Card.Title
                        style={{
                            textAlign: 'center',
                            fontSize: '25px',
                            fontWeight: 'bold'
                        }}>
                        필터
                    </Card.Title>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                        <Card.Text
                            style={{
                                padding: '10px'
                            }}>
                            <div>ShipType</div>
                            <Form.Check type="checkbox" label="화물선" onClick={toggle1}/>
                            <Form.Check type="checkbox" label="여객선" onClick={toggle2}/>
                        </Card.Text>
                        <Card.Text
                            style={{
                                padding: '10px'
                            }}>
                            <div>Loss signal</div>
                            <Form.Check type="checkbox" label="O"/>
                            <Form.Check type="checkbox" label="X"/>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </FilterStyle>
    );
};

export default Filter;
