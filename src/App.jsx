import { Container, Content, Row, Column } from "./styles";
import  Input  from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [lastNumber, setLastNumber] = useState('0');
    const [result, setResult] = useState('0');
    const [operation, setOperation]=useState('');


    const handleOnClear = () => {
        setCurrentNumber('0')
        setLastNumber('0')
        setResult('0')
        setOperation('')
    };
    const handleAddNumber = (digit) => { 
        if(digit === '.' && currentNumber.includes(".")) {
            return;
        }            
        setCurrentNumber(prev => prev === '0' ? digit : prev += digit)      
        
    }
    
    const handleSum = () => {       

        if(lastNumber==='0'){    
            setLastNumber(String(currentNumber));        
            setCurrentNumber('0')
            setOperation('+')

        }else {            
            const sum = Number(lastNumber) + Number(currentNumber)            
            setCurrentNumber(String(sum))
            console.log('lastNumber = ' + lastNumber)
            console.log('currentNumber = ' + currentNumber)   
            console.log('result = ' + result)        
            
            setOperation('')
        }
    }

    const handleMinus = () => {
        if(lastNumber==='0'){
            setLastNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        }else {
            const minus = Number(lastNumber) - Number(currentNumber)
            setCurrentNumber(String(minus))
            setOperation('')
        }
    }

    const handleEquals = () => {
        if(lastNumber !=='0' && operation !== '' && currentNumber !== '0'){
           switch ((operation)) {
            case '+':
                handleSum();
                break;
            
            case '-':
                handleMinus();
                break;
           
            default:
                break;
           }
        }
    }

    return (
        <Container>
           <Content>
                <Input value = {currentNumber}/>
                <Row>
                    <Button label= 'C' onClick = {handleOnClear}/>
                    <Button label= '<--' onClick = {() => handleAddNumber('')}/>
                    <Button label= '%' onClick = {() => handleAddNumber('')}/>
                    <Button label= '/' onClick = {() => handleAddNumber('')}/>
                </Row>
                <Row>
                    <Button label= '7' onClick = {() => handleAddNumber('7')}/>
                    <Button label= '8' onClick = {() => handleAddNumber('8')}/>
                    <Button label= '9' onClick = {() => handleAddNumber('9')}/>
                    <Button label= 'X' onClick = {() => handleAddNumber('')}/>
                </Row>
                <Row>                    
                    <Button label= '4' onClick = {() => handleAddNumber('4')}/>
                    <Button label= '5' onClick = {() => handleAddNumber('5')}/>
                    <Button label= '6' onClick = {() => handleAddNumber('6')}/>
                    <Button label= '-' onClick = {handleMinus}/>
                </Row>
                <Row>
                    <Button label= '1' onClick = {() => handleAddNumber('1')}/>
                    <Button label= '2' onClick = {() => handleAddNumber('2')}/>
                    <Button label= '3' onClick = {() => handleAddNumber('3')}/>
                    <Button label= '+' onClick = {handleSum}/>
                </Row>
                <Row>
                    <Button label= '00' onClick = {() => handleAddNumber('00')}/>
                    <Button label= '0' onClick = {() => handleAddNumber('0')}/>
                    <Button label= '.' onClick = {() => handleAddNumber('.')}/>
                    <Button label= '=' onClick = {handleEquals}/>
                </Row>
           </Content>
        </Container>
    );
}
export default App;