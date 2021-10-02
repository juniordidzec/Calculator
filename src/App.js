import React, {useState} from 'react';

import Screen from './components/screen';
import Btn from './components/btn';

import './App.css';
import './components/screen.css';
import './components/btn.css';

export default function App() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);  
  const [operado, setOperado] = useState(false);

  const addDigitoTela=(digito, valor)=>{
    if((digito==='+' || digito==='-' || digito==='/' || digito==='*') && operado) {
        setOperado(false)
        setValor(resultado+digito)
        return
    }
    if(operado){
      setValor(digito)
      setOperado(false)
      return
    }
    const arrayValor = valor.split('').pop()
    if((arrayValor==='+' || arrayValor==='-' || arrayValor==='/' || arrayValor==='*' || arrayValor==='.' || arrayValor==='') && (digito==='+' || digito==='-' || digito==='/' || digito==='*'|| digito==='.')) {
      return
    }else if((valor === '') && (digito==='+' || digito==='-' || digito==='/' || digito==='*' || digito==='.' || digito===')')){
      return
    }else {
      const valorDigitadoTela=valor+digito
      setValor(valorDigitadoTela)
    }
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValor('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const operacao=(oper, valor)=>{
    if(valor !== ''){
      if(oper==='bs'){
        let veTela=valor
        veTela = veTela.substring(0, (veTela.length-1))
        setValor(veTela)
        setOperado(false)
        return
      }
      try{
        const r=eval(valor)
        setAcumulador(r)
        setResultado(r)
        setOperado(true)
      }catch{
        setResultado('ERRO')
      }
    }
  }

  return (
    <main className='main'>
      <div className='main-container'>
        <h3>Calculadora Matemática</h3>
        <Screen valor={valor} res={resultado}/>
        <div className='wrapper-buttons'>
          <Btn label={'AC'} onClick={limparMemoria}/>
          <Btn label={'('} onClick={()=>addDigitoTela('(', valor)}/>
          <Btn label={')'} onClick={()=>addDigitoTela(')', valor)}/>
          <Btn label={'/'} onClick={()=>addDigitoTela('/', valor)}/>
          <Btn label={'7'} onClick={()=>addDigitoTela('7', valor)}/>
          <Btn label={'8'} onClick={()=>addDigitoTela('8', valor)}/>
          <Btn label={'9'} onClick={()=>addDigitoTela('9', valor)}/>
          <Btn label={'*'} onClick={()=>addDigitoTela('*', valor)}/>
          <Btn label={'4'} onClick={()=>addDigitoTela('4', valor)}/>
          <Btn label={'5'} onClick={()=>addDigitoTela('5', valor)}/>
          <Btn label={'6'} onClick={()=>addDigitoTela('6', valor)}/>
          <Btn label={'-'} onClick={()=>addDigitoTela('-', valor)}/>
          <Btn label={'1'} onClick={()=>addDigitoTela('1', valor)}/>
          <Btn label={'2'} onClick={()=>addDigitoTela('2', valor)}/>
          <Btn label={'3'} onClick={()=>addDigitoTela('3', valor)}/>
          <Btn label={'+'} onClick={()=>addDigitoTela('+', valor)}/>
          <Btn label={'0'} onClick={()=>addDigitoTela('0', valor)}/>
          <Btn label={'.'} onClick={()=>addDigitoTela('.', valor)}/>
          <Btn label={'<-'} onClick={()=>operacao('bs', valor)}/>
          <Btn label={'='} onClick={()=>operacao('=', valor)}/>
        </div>
      </div>
    </main>
  );
}