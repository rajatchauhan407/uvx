import React from 'react';
import styles from './index.module.css';

interface IButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    disabled?: boolean;
}


const Button:React.FC<IButtonProps> = ({variant='contained',color='default',disabled=false,onClick,children}) => {
    // console.log(styles)
    const className = `${styles.customButton} ${styles[variant]} ${styles[color]} ${disabled ? styles.disabled : ''}`;
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}
export default Button;