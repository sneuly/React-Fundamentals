import PropTypes from 'prop-types';

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

Input.propTypes = {
	labelText: PropTypes.string,
	placeHolderText: PropTypes.string,
	type: PropTypes.string,
	pattern: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	onKeyUp: PropTypes.func,
};

export default Input;
