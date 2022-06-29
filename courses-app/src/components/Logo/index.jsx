import styles from './Logo.module.css';

const LOGO = require('../../assets/logo.png');

const Logo = () => <img src={LOGO} alt='Github Logo' className={styles.logo} />;

export default Logo;
