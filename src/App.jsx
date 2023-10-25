import { Container, Content, Row, Column } from "./styles";
import  Input  from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


const App = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [prevValue, setPrevValue] = useState('0');
    const [operation, setOperation]=useState(null);


    const handleOnClear = () => {
        setCurrentValue('0')
        setPrevValue('0')
        setOperation('')
    };

    const handleAddDigit = (digit) => { 
        if(digit === '.' && currentValue.includes(".")) {
            return;
        } else {
          setCurrentValue(prev => prev === '0' ? digit : prev += digit)
        }        
    }    

    
    
    const handleSum = (e) => { 
        if(prevValue==='0'){    
            setPrevValue(String(currentValue));         
            setCurrentValue('') 
            setOperation('+')
          
        }else {            
            const sum = Number(prevValue) + Number(currentValue)            
            setCurrentValue(String(sum))
            console.log('prevValue = ' + prevValue)
            console.log('currentNumber = ' + currentValue)             
            setOperation('')
        }
    }

    const handleMinus = () => {
        if(prevValue==='0'){
            setPrevValue(String(currentValue));
            setCurrentValue('')
            setOperation('-')
        }else {
            const minus = Number(prevValue) - Number(currentValue)
            setCurrentValue(String(minus))
            setOperation('')
        }
    }

    const handleDivide = () => {
      if(prevValue==='0'){
          setPrevValue(String(currentValue));
          setCurrentValue('')
          setOperation('/')
      }else {
          const divide = Number(prevValue) / Number(currentValue)
          setCurrentValue(String(divide))
          setOperation('')
      }
    }

    const handleMultiply = () => {
      if(prevValue==='0'){
          setPrevValue(String(currentValue));
          setCurrentValue('')
          setOperation('*')
      }else {
          const multiply = Number(prevValue) * Number(currentValue)
          setCurrentValue(String(multiply))
          setOperation('')
      }
    }

    const handlePercent= () => {
        const percent = Number(currentValue/100)
        setCurrentValue(String(percent))   
    }

    const deleteLastDigit = () => {
        const deleteLast = Number(currentValue.slice(0, -1))
        setCurrentValue(String(deleteLast))
    }

    const handleEquals = () => {
      if(prevValue !=='0' && operation !== 'null' && currentValue !== '0'){
         switch ((operation)) {
          case '+':
              handleSum(); 
              break;
          
          case '-':
              handleMinus();
              break;
          
          case '/':
              handleDivide();
              break;

          case '*':
              handleMultiply();
              break;
          
          default:
              break;
         }
      }
  }
    

    return (
        <Container>
           <Content>
                <Input value = {currentValue}/>
                <Row>
                    <Button label= 'C' onClick = {handleOnClear}/>
                    <Button label= 'DEL' onClick = {deleteLastDigit}/>
                    <Button label= '%' onClick = {handlePercent}/>
                    <Button label= '/' onClick = {handleDivide}/>
                </Row>
                <Row>
                    <Button label= '7' onClick = {() => handleAddDigit('7')}/>
                    <Button label= '8' onClick = {() => handleAddDigit('8')}/>
                    <Button label= '9' onClick = {() => handleAddDigit('9')}/>
                    <Button label= 'X' onClick = {handleMultiply}/>
                </Row>
                <Row>                    
                    <Button label= '4' onClick = {() => handleAddDigit('4')}/>
                    <Button label= '5' onClick = {() => handleAddDigit('5')}/>
                    <Button label= '6' onClick = {() => handleAddDigit('6')}/>
                    <Button label= '-' onClick = {handleMinus}/>
                </Row>
                <Row>
                    <Button label= '1' onClick = {() => handleAddDigit('1')}/>
                    <Button label= '2' onClick = {() => handleAddDigit('2')}/>
                    <Button label= '3' onClick = {() => handleAddDigit('3')}/>
                    <Button label= '+' onClick = {handleSum} value={'+'}/>
                </Row>
                <Row>
                    <Button label= '00' onClick = {() => handleAddDigit('00')}/>
                    <Button label= '0' onClick = {() => handleAddDigit('0')}/>
                    <Button label= '.' onClick = {() => handleAddDigit('.')}/>
                    <Button label= '=' onClick = {handleEquals}/>
                </Row>
           </Content>
        </Container>
    );
}
export default App;