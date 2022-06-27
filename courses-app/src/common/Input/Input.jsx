import styles from './Input.module.css';

const Input = ({
	labelText = '',
	placeholderText,
	type = 'text',
	pattern = '',
	name,
	value,
	onChange,
	onKeyUp = () => {},
	className = '',
}) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={name}>{labelText}</label>
			<input
				type={type}
				name={name}
				pattern={pattern}
				placeholder={placeholderText}
				className={`${styles.input} ${styles[className]}`}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyUp={(e) => onKeyUp(e.target.value)}
			/>
		</div>
	);
};

export default Input;
