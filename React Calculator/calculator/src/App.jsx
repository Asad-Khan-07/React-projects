import { useState } from 'react';

function Calculator() {
  
  const [number,setNumber]=useState("")  
  const  [exp,setExp]=useState()
 const [history, setHistory] = useState([]);
  
  const insert=(n)=>{
    setNumber(number+n)
  }
  
  const calculate=()=>{    
    try {
      setExp(number+"=")
      const final=eval(number).toString()
      setHistory([...history,`${number}=${final}`])
      setNumber(final)
    } catch (error) {
      setNumber("Syantax Error") 
    }
  }

const Allclear=()=>{
  setNumber("")  
}

const clear=()=>{
  setNumber(number.slice(0,-1))
}

const [reasult,setReasult]=useState()
const showHistory=()=>{
  setReasult(history.join("|"))
}

const hidehistory=()=>{
    setReasult("")
}


  return (
    
      <div className="calculator">
        <div id="display">
          <h5>{exp}{number}</h5>
          <h6>{reasult}</h6>
          </div>
        <div id="history"><span onClick={showHistory}>Show history</span><span onClick={hidehistory}>Hide history</span></div>
       <div className="buttons">
            
            <button className="button1" onClick={() => insert(1)}>1</button>
            <button className="button2" onClick={() => insert(2)}>2</button>
            <button className="button3" onClick={() => insert(3)}>3</button>
           
            <button className="button4" onClick={() => insert(4)}>4</button>
            <button className="button5" onClick={() => insert(5)}>5</button>
            <button className="button6" onClick={() => insert(6)}>6</button>
            
            <button className="button7" onClick={() => insert(7)}>7</button>
            <button className="button8" onClick={() => insert(8)}>8</button>
            <button className="button9" onClick={() => insert(9)}>9</button>
            <button className="button0" onClick={() => insert(0)}>0</button>
            
            <button className="buttonplus" onClick={() => insert("+")}>+</button>
            <button className="buttonmul"  onClick={() => insert("*")}>*</button>
            <button className="buttonsub"  onClick={() => insert("-")}>-</button>
            
            <button className="buttondot"   onClick={() => insert(".")}>.</button>
            <button className="buttondiv"   onClick={() => insert("/")}>/</button>
            <button className="buttonmodul" onClick={() => insert("%")}>%</button>
            <button className="buttonequal" onClick={calculate}>=</button>
            <button className="buttonclear" onClick={clear}>C</button>
            <button className="buttonAC" onClick={Allclear}>AC</button>
        </div>
    </div>
    
  );
}

export default Calculator;