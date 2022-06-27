import styles from './Textarea.module.css';

const Textarea = ({
	labelText = '',
	placeholderText,
	minLength,
	className = '',
	required,
	name,
	value,
	onChange,
}) => {
	return (
		<div className={styles.textareaWrapper}>
			<label htmlFor={name}>{labelText}</label>
			<textarea
				type='text'
				name={name}
				minLength={minLength}
				placeholder={placeholderText}
				className={`${styles.textarea} ${styles[className]}`}
				required={required}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default Textarea;
