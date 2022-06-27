import { Button } from '../../../../common';
import { CourseDetail } from '../../../index';

import {
	getAuthors,
	formatCreationDate,
	getCourseDuration,
} from '../../../../helpers';

import styles from './CourseCard.module.css';

const CourseCard = ({ course, authors }) => {
	const {
		title,
		description,
		creationDate,
		duration,
		authors: authorIds,
	} = course;

	return (
		<article className={styles.courseCard}>
			<div className={styles.mainDescription}>
				<h2 className={styles.title}>{title}</h2>
				<p>{description}</p>
			</div>

			<div className={styles.detailsWrapper}>
				<CourseDetail
					title='Authors'
					value={getAuthors(authorIds, authors)}
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

export default CourseCard;
