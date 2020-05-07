import React,{useState} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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

export default function Grupo1(){
  const [Value1, setValue1] = useState(0);
  const [Value2, setValue2] = useState(0);
  const [Resultado, setResultado] = useState(0);
  return (
    <div>
        <h1>Grupo 1</h1>
        <input onChange = {e => setValue1(e.target.value)} type = 'text' id = "txt1"></input>
        <input onChange = {e => setValue2(e.target.value)} type = 'text' id = "txt2"></input>
        <button id ='soma' onClick = {()=>soma(Value1,Value2)}>Somar</button>
        <button id ='subtração' onClick = {()=>subtração(Value1,Value2)} >Subtração</button>
        <button id ='mutiplicação' onClick = {()=>multiplicação(Value1,Value2)}>Mutiplicação</button>
        <button id ='divisão' onClick = {()=>divisão(Value1,Value2)}>Divisão</button>
        <p id ="res">Resultado</p>
    </div>

    
  );
}
function soma(Value1,Value2){
  Value1.parseInt()
  console.log("clicou")
}
function subtração(Value1,Value2){

  console.log("clicou")
}
function multiplicação(Value1,Value2){

  console.log("clicou")
}
function divisão(Value1,Value2){

  console.log("clicou")
}