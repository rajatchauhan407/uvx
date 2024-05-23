// This input component is a simple input component that accepts the following props: I prepared this component in advance to save time.

import React from 'react';
import styles from './index.module.css';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?:string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({label,onChange,...props}) => {
    return (
        <div className={styles.inputContainer}>
            <input type="text" className={styles.customInput} {...props} onChange={onChange}/>
            {/* {label && <label className={styles.customLabel}>{label}</label>} */}
        </div>
    );
}

export default Input;