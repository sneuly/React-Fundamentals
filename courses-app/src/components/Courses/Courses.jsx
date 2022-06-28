import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { SearchBar, CourseListing } from '../index';

import styles from './Courses.module.css';
import { getAuthors, findCoursesByKeyword } from '../../helpers';

const ERROR_MESSAGE = 'No Courses found with this keyword. Try again!';

const Courses = ({ courses, setCreateCourse, authors }) => {
	const coursesWithAuthors = courses.map((course) => {
		const courseAuthors = getAuthors({ course, authors });

		return { ...course, authors: courseAuthors };
	});

	const [displayedCourses, setDisplayedCourses] = useState(coursesWithAuthors);
	const [error, setError] = useState(false);
	const [keyword, setKeyword] = useState('');

	const toggleCreateCourse = () => setCreateCourse((prev) => !prev);

	const handleSubmit = () => {
		if (findCoursesByKeyword(keyword, courses).length === 0) {
			setError(ERROR_MESSAGE);
		} else {
			setError('');
			setDisplayedCourses(findCoursesByKeyword(keyword, coursesWithAuthors));
		}
	};

	const handleReset = () => {
		if (keyword.length <= 0) {
			setError('');
			setDisplayedCourses(coursesWithAuthors);
		}
	};

	return (
		<section className={`${styles.coursesContainer} container`}>
			<div className={styles.header}>
				<SearchBar
					keyword={keyword}
					setKeyword={setKeyword}
					handleReset={handleReset}
					handleSubmit={handleSubmit}
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
