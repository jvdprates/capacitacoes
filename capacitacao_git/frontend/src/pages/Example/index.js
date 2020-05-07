import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Example() {

  //Contador de clicks.
  const [numclick, setNumclick] = useState(0);

  //Manipular numeros.
  const [number, setNumber] = useState(10);

  //Manipular caixinhas.
  const [boxvec, setBoxvec] = useState([1, 2, 3]);
  const counter = useRef(3);


  function handleClickCount() {
    setNumclick(numclick + 1);
  }

  function handleSubtract() {
    setNumber(number - 1);
  }
  function handleSum() {
    setNumber(number + 1);
  }
  function handleMult2() {
    setNumber(number * 2);
  }
  function handle0() {
    setNumber(0);
  }

  function handleAddBox() {
    counter.current = counter.current + 1;
    let aux = [...boxvec];
    aux.push(counter.current);
    setBoxvec(aux);
  }
  function handleRemoveBox() {
    if (counter.current > 0) {
      counter.current = counter.current - 1;
      let aux = [...boxvec];
      aux.pop();
      setBoxvec(aux);
    } else {
      alert("Não pode remover mais");
    }
  }

  return (
    <div className="e_fullContainer">
      <div className="d-flex justify-content-center">
        <h1 className="e_mainTitle">Página de exemplos simples</h1>
      </div>
      <div className="e_centralBox align-itens-center">
        <div className="container">
          <div className="d-flex justify-content-center e_spacedRow">
            <h3 className="e_regularText">Este botão conta clicks -></h3>
            <Button onClick={() => { handleClickCount() }} variant="success">{numclick}</Button>
          </div>
          <div className="d-flex justify-content-center">
            <h3 className="e_regularText">Manipule este numero -> | {number} |</h3>
            <Button className="e_spacedCol" onClick={() => { handleSubtract() }} variant="success">-1</Button>
            <Button className="e_spacedCol" onClick={() => { handleSum() }} variant="primary">+1</Button>
            <Button className="e_spacedCol" onClick={() => { handleMult2() }} variant="success">*2</Button>
            <Button className="e_spacedCol" onClick={() => { handle0() }} variant="info">=0</Button>
          </div>
          <div className="d-flex justify-content-center">
            <h3 className="e_regularText">Manipule caixinhas!</h3>
            <div className="d-flex flex-wrap">
              {
                boxvec.map((value) => {
                  return (
                    <div className="e_smallBox">{value}</div>
                  )
                })
              }
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button className="e_spacedCol" variant="info" onClick={() => { handleAddBox() }}>Adicionar caixinha</Button>
            <Button className="e_spacedCol" variant="info" onClick={() => { handleRemoveBox() }}>Remover caixinha</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
