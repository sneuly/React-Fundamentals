import { Logo } from '../index';
import { Button } from '../../common';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />

			<div className={styles.leftSide}>
				<h3 className={styles.name}>Mariami</h3>
				<Button title='Logout' className='danger' />
			</div>
		</header>
	);
};

export default Header;
