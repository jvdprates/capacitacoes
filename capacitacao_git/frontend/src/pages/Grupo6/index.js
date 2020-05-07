import React, {useState} from 'react';
import './styles.css';

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

export default function Grupo6(){

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function divisao()
  {
    setResult(number/number2);
  }
  function soma()
  {
    setResult(number+number2);
  }
  function multiplicacao()
  {
    setResult(number*number2);
  }
  function subtracao()
  {
    setResult(number-number2);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
        <input type="text" onChange={e => setNumber(parseFloat(e.target.value))}></input>
        <input type="text" onChange={e => setNumber2(parseFloat(e.target.value))}></input>
        <button onClick={() => {divisao()}}>divisão</button>
        <button onClick={() => {soma()}}>soma</button>
        <button onClick={() => {multiplicacao()}}>multiplicação</button>
        <button onClick={() => {subtracao()}}>subtração</button>
        <h1>RESULTADO: {result}</h1>
    </div>
  );
}
