import PropTypes from 'prop-types';

import { Button } from '../../../../common';
import { CourseDetail } from '../../../index';

import {
	getAuthors,
	formatCreationDate,
	getCourseDuration,
} from '../../../../helpers';

import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
	const { title, description, creationDate, duration, authors } = course;
	const courseAuthorNames = authors.map((a) => a.name).join(',');

	return (
		<article className={styles.courseCard}>
			<div className={styles.mainDescription}>
				<h2 className={styles.title}>{title}</h2>
				<p>{description}</p>
			</div>

			<div className={styles.detailsWrapper}>
				<CourseDetail
					title='Authors'
					value={courseAuthorNames}
					className='authors'
				/>
				<CourseDetail title='Duration' value={getCourseDuration(duration)} />
				<CourseDetail
					title='Created'
					value={formatCreationDate(creationDate)}
				/>

				<Button type='primary'>Show Course</Button>
			</div>
		</article>
	);
};

CourseCard.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
};

export default CourseCard;
