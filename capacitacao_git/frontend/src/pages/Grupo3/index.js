import React, { useState, useRef } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grupo3() {
    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [result, setResult] = useState(0)


    function sum(num1, num2) {
        return -(-num1 - num2)
    }

    function diff(num1, num2) {
        return num1 - num2
    }

    function times(num1, num2) {
        return num1 * num2
    }

    function division(num1, num2) {
        return num1 / num2
    }

    function reset() {
        setNumber1(0)
        setNumber2(0)
        setResult(0)
    }

    return (
        <div className='calculadora'>
            <InputGroup className='texto d-flex mt-2 ml-5 '>
                <InputGroup.Prepend>
                    <InputGroup.Text>Coloque os números para realizar as operações</InputGroup.Text>
                    <FormControl className='input' value={number1} onChange={e => setNumber1(e.target.value)} />
                    <FormControl className='input' value={number2} onChange={e => setNumber2(e.target.value)} />
                </InputGroup.Prepend>
            </InputGroup>
            {console.log(number1, number2)}
            <div className='button d-flex flex-column mt-4'>
                <div>
                    <Button className='mais' value={result} onClick={() => setResult(sum(number1, number2))}>+</Button>
                    <Button className='diff' value={result} onClick={() => setResult(diff(number1, number2))}>-</Button>
                </div>
                <div>
                    <Button className='vezes' value={result} onClick={() => setResult(times(number1, number2))}>*</Button>
                    <Button className='' value={result} onClick={() => setResult(division(number1, number2))}>/</Button>
                </div>
                <div><Button className='reset' value={result} onClick={() => reset()}>Reset</Button>
                </div>
            </div>
            <div className='resultado'>
                <h1>Resultado: {result}</h1>
            </div>
        </div>
    )
}