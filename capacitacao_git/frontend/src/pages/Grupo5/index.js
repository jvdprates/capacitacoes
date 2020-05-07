import React, { useState } from 'react';
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

export default function Grupo5(){

  const [num1, setNum1]=useState(0)
  const [num2, setNum2]=useState(0)

  const [res, setRes]=useState(0)

  console.log(num1)
  console.log(num2)

  function somar(num1, num2){
    setRes(num1+num2)
  }
  
  function subtrair(num1, num2){
    setRes(num1-num2)
  }

  
  function multiplicar(num1, num2){
    setRes(num1*num2)
  }
  
  function dividir(num1, num2){
    setRes((num1/num2).toFixed(2))
  }
  //parseInt(e.target.value)
  return (
    <div style={{textAlign:"center"}}>
       <h1>Calculadora Grupo 5</h1>
        <input type='text' placeholder='Número 1' onChange={(e)=>{setNum1(parseInt(e.target.value,10))}}/><br></br>
        <input type="text" placeholder='Número 2' onChange={(e)=>{setNum2(parseInt(e.target.value,10))}}/><br></br>
          <br></br>
        <button onClick={()=>{somar(num1,num2)}}>Somar</button>
        <button onClick={()=>{subtrair(num1,num2)}}>Subtrair</button>
        <button onClick={()=>{multiplicar(num1,num2)}}>Multiplicar</button>
        <button onClick={()=>{dividir(num1,num2)}}>Dividir</button>
        <hr></hr>
   <h1>Resultado:{res}</h1>
   <img src='https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif'/>
    </div>
  );
}

/* function calculadora(){

  return(){
    
  }
} */