import PropTypes from 'prop-types';
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

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
