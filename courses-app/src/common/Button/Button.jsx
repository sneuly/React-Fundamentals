import styles from './Button.module.css';

const Button = ({ className = '', type, title, onClick }) => {
	return (
		<button
			className={`${styles.button} ${styles[className]}`}
			type={type}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
