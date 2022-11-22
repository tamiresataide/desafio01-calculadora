import { Container, Content, Row } from "./styles";
import Input from "./components/Input/"
import Button  from "./components/Buttton"
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [fisrtNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0')
  }  

  const handleAddNumber = (number ) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
   
    if (fisrtNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(fisrtNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleSubtractNumbers = () => {
   
    if (fisrtNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(fisrtNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {
   
    if (fisrtNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

          case '-':
          handleSubtractNumbers();
          break;
      
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label='&#8592;' onClick={() => handleAddNumber('')} />
          <Button label='&#8730;' onClick={() => handleAddNumber('')} />
          <Button label='C' onClick={handleOnClear} />
          <Button label='×' onClick={() => handleAddNumber('*')} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='÷' onClick={() => handleAddNumber('/')} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='+' onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='-' onClick={handleSubtractNumbers} />
        </Row>
        <Row>
          <Button label='.' onClick={() => handleAddNumber('.')} />
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label='%' onClick={() => handleAddNumber('%')} />
          <Button label='=' onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
