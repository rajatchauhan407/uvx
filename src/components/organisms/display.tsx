import React from 'react';
import styles from './display.module.css';
import Input from '../atoms/input';
import {evaluate} from 'mathjs';
interface ButtonProps {
  label: string;
  className: string;
}


const buttons: ButtonProps[] = [
  { label: 'C', className: 'buttonClear' },
  { label: '()', className: 'buttonParen' },
  { label: '%', className: 'buttonPercent' },
  { label: '÷', className: 'buttonOperator' },
  { label: '7', className: 'buttonNumber' },
  { label: '8', className: 'buttonNumber' },
  { label: '9', className: 'buttonNumber' },
  { label: 'x', className: 'buttonOperator' },
  { label: '4', className: 'buttonNumber' },
  { label: '5', className: 'buttonNumber' },
  { label: '6', className: 'buttonNumber' },
  { label: '-', className: 'buttonOperator' },
  { label: '1', className: 'buttonNumber' },
  { label: '2', className: 'buttonNumber' },
  { label: '3', className: 'buttonNumber' },
  { label: '+', className: 'buttonOperator' },
  { label: '00', className: 'buttonSign' },
  { label: '0', className: 'buttonNumber' },
  { label: '.', className: 'buttonDot' },
  { label: '=', className: 'buttonEqual' },
];

const Display: React.FC = () => {
  const [input, setInput] = React.useState<string>('');
  const [stack, setStack] = React.useState<string[]>([]);
  const handleButtonClick = (label: string) => {
    if(label === 'C') {
        setInput('');
        } else if(label === '()')
        {   
            if(stack[stack.length - 1] === '('){
                setInput(prevInput => prevInput + ')');
                stack.pop();
            }else{
            setInput(prevInput => prevInput + '(');
            stack.push('(');
            }
        }
        else if(label === '=') {
            try{
                setInput(evaluate(input.replace('x', '*').replace('÷','/')));
            }catch{
                setInput('Error');
            }
        }else{
            setInput(prevInput => prevInput + label);
        }
}
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }}>
        <Input 
            placeholder="0" 
            value={input}
            readOnly
            style={{
                fontSize: '2rem',
            }}
        />
        <div className={styles.calculator}>
      {buttons.map((button, index) => (
        <button 
            key={index} 
            className={styles[button.className]}
            onClick={() => handleButtonClick(button.label)}
            >
          {button.label}
        </button>
      ))}
    </div>
    </div>
    
  );
};

export default Display;
