import styles from './CourseDetail.module.css';

const CourseDetail = ({ title, value, className = '' }) => (
	<div className={`${styles.courseDetail} ${styles[className]}`}>
		<span className={styles.title}>{`${title}:`}&nbsp;</span>
		<span className={styles.value}>{value}</span>
	</div>
);

export default CourseDetail;
