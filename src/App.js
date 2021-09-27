import React, {useState} from 'react';

export default function App() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);  
  const [operado, setOperado] = useState(false);

  const Tela=(valor, res)=>{
    return(
      <div className='main-display'>
        <p className='display-value'>{valor}</p>
        <p className='display-result'>{res}</p>
      </div>
    )
  }

  const Btn=(label, onClick)=>{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return(
        <button className={`buttons-calculator ${label === '.' || label in num ? '' : '-orange'}`} onClick={onClick}>{label}</button>
    )
  }

  //Funções
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
        {Tela(valor, resultado)}
        <div className='wrapper-buttons'>
          {Btn('AC', limparMemoria)}
          {Btn('(', ()=>addDigitoTela('(', valor))}
          {Btn(')', ()=>addDigitoTela(')', valor))}
          {Btn('/', ()=>addDigitoTela('/', valor))}
          {Btn('7', ()=>addDigitoTela('7', valor))}
          {Btn('8', ()=>addDigitoTela('8', valor))}
          {Btn('9', ()=>addDigitoTela('9', valor))}
          {Btn('*', ()=>addDigitoTela('*', valor))}
          {Btn('4', ()=>addDigitoTela('4', valor))}
          {Btn('5', ()=>addDigitoTela('5', valor))}
          {Btn('6', ()=>addDigitoTela('6', valor))}
          {Btn('-', ()=>addDigitoTela('-', valor))}
          {Btn('1', ()=>addDigitoTela('1', valor))}
          {Btn('2', ()=>addDigitoTela('2', valor))}
          {Btn('3', ()=>addDigitoTela('3', valor))}
          {Btn('+', ()=>addDigitoTela('+', valor))}
          {Btn('0', ()=>addDigitoTela('0', valor))}
          {Btn('.', ()=>addDigitoTela('.', valor))}
          {Btn('<-', ()=>operacao('bs', valor))}
          {Btn('=', ()=>operacao('=', valor))}
        </div>
      </div>
    </main>
  );
}