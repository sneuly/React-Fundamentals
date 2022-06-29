import PropTypes from 'prop-types';

import styles from './CourseDetail.module.css';

const CourseDetail = ({ title, value, className = '' }) => (
	<div className={`${styles.courseDetail} ${styles[className]}`}>
		<span className={styles.title}>{`${title}:`}&nbsp;</span>
		<span className={styles.value}>{value}</span>
	</div>
);

CourseDetail.propTypes = {
	title: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
};

export default CourseDetail;
