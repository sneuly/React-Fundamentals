import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { SearchBar, CourseListing } from '../index';

import styles from './Courses.module.css';
import { getAuthors } from '../../helpers';

const Courses = ({ courses, setCreateCourse, authors }) => {
	const coursesWithAuthors = courses.map((course) => {
		const courseAuthors = getAuthors({ course, authors });

		return { ...course, authors: courseAuthors };
	});

	const [displayedCourses, setDisplayedCourses] = useState(coursesWithAuthors);
	const [error, setError] = useState(false);

	const toggleCreateCourse = () => setCreateCourse((prev) => !prev);

	return (
		<section className={`${styles.coursesContainer} container`}>
			<div className={styles.header}>
				<SearchBar
					courses={courses}
					setDisplayedCourses={setDisplayedCourses}
					setError={setError}
				/>
				<Button className='primary' onClick={toggleCreateCourse}>
					Add new course
				</Button>
			</div>

			<div>
				{error ? (
					<h1 className={styles.errorMsg}>{error}</h1>
				) : (
					<CourseListing courses={displayedCourses} />
				)}
			</div>
		</section>
	);
};

Courses.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
	setCreateCourse: PropTypes.func,
};

export default Courses;
