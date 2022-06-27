import styles from './Textarea.module.css';

const Textarea = ({
	labelText = '',
	placeholderText,
	minLength,
	className = '',
	required,
	name,
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
				// value={username}
				// onChange={(e) => setUsername(e.target.value)}
				// onKeyUp={(e) => handleSubmit(e)}
			/>
		</div>
	);
};

export default Textarea;
