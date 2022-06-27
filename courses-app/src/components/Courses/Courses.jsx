import { useState } from 'react';

import { Button } from '../../common';
import { SearchBar, CourseListing } from '../index';

import styles from './Courses.module.css';

const Courses = ({ courses, setCreateCourse, authors }) => {
	const [displayedCourses, setDisplayedCourses] = useState(courses);
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
					<CourseListing courses={displayedCourses} authors={authors} />
				)}
			</div>
		</section>
	);
};

export default Courses;
