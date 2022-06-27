import { CourseCard } from '../../../index';

import styles from './CourseListing.module.css';

const CourseListing = ({ courses, authors }) => {
	return (
		<div className={styles.courseListing}>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} authors={authors} />
			))}
		</div>
	);
};

export default CourseListing;
