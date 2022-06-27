import styles from './Button.module.css';

const Button = ({ className = '', type, children, onClick }) => {
	return (
		<button
			className={`${styles.button} ${styles[className]}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
