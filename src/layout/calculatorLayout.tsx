import React from 'react';
import styles from './calculatorLayout.module.css';

const CalculatorLayout:React.FC<{children:React.ReactNode}> = ({children}) => {
    
     
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default CalculatorLayout;