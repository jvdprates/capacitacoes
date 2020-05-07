import React, { useState } from "react";
import "./styles.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
//
/*
Passos e Orientações :
- Uma vez copiado o diretório crie um branch para seu grupo e trabalhe sempre nele.
- Rode npm install e começe a trabalhar na página do seu grupo dentro de /pages.
- Cada grupo deverá criar uma página em um intervalo de tempo estipulado na capacitação (prazo sujeito a mudança).
- Use esta oportunidade para mostrar os conhecimentos adquiridos durante as últimas capacitações.
- Ao final do tempo estipulado pare de trabalhar e dê o commit.
- Todos os branchs de todos os grupos serão unidos ao master e o resultado final será mostrado em seguida.
- Se precisarem de referência para criação de uma página, deixei a página localizada em /pages/Example para vocês consultarem.

Regras da dinâmica:
- Vocês não poderão instalar nenhuma dependencia extra no projeto, trabalhem com o que já tem instalado.
- Use apenas styles.css da pasta do seu grupo para estilos.
- Nesses estilos não sobrescreva componentes padrão do html, crie classes css com nome no formato -> g*_nomeClasse / para * = número do seu grupo.
- Não faça nenhuma alteração em routes.js, App.js nem com o index.js global e pastas de outros grupos.
- Se quiser pode apagar esse comentário (depois de ler tudo é claro).
*/

export default function Grupo4() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);
  const [resultado, setResultado] = useState("");

  function handleNum1Change(event) {
    let res = event.target.value;
    res = parseFloat(res);
    setNum1(res);
  }
  function handleNum2Change(event) {
    let res = event.target.value;
    res = parseFloat(res);
    setNum2(res);
  }

  function soma() {setResultado(num1+num2);}
  function subtracao() {setResultado(num1-num2);}
  function multiplicacao() {setResultado(num1*num2);}
  function divisao() {setResultado(num1/num2);}

  function chooseStyle() {
    let style = {fontSize:300};
    if(resultado > 0) 
      style.color = "green";
    else if(resultado == 0)
      style.color = "grey";
    else
      style.color = "red";
    return style;
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center main-container">
      <h1 className="m-5">Grupo 4</h1>
      <div className="m-3">
        <input className="mx-3 text-center"type="number" value={num1} onChange={handleNum1Change}></input>
        <input className="mx-3 text-center" type="number" value={num2} onChange={handleNum2Change}></input>
      </div>
      <div className="m-3">
        <button className="btn btn-primary mx-3" onClick={soma}>Soma</button>
        <button className="btn btn-success mx-3" onClick={subtracao}>Subtração</button>
        <button className="btn btn-danger mx-3" onClick={multiplicacao}>Multiplicação</button>
        <button className="btn btn-warning mx-3" onClick={divisao}>Divisão</button>
      </div>
      <div className="m-3">
        <h1 className="text-center">Resultado:</h1>
        <h1 className="text-center" style={chooseStyle()}>{resultado}</h1>
      </div>
    </div>
  );
}
