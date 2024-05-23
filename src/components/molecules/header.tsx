import React from 'react';
import styles from './header.module.css';
import Typography from '../atoms/typography';
const Header:React.FC = () => {
    return (
        <header className={styles.header}>
            <Typography variant="heading" component="h1" fontSize='h1'>Calculator</Typography>
        </header>
    );
}

export default Header;