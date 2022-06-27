import { useState, useEffect } from 'react';

import { Button, Loader } from '../../common';
import { SearchBar, CourseListing } from '../index';

import styles from './Courses.module.css';

const Courses = ({ courses, setCourses, setCreateCourse, authors }) => {
	const [error, setError] = useState(false);

	const toggleCreateCourse = () => setCreateCourse((prev) => !prev);

	return (
		<section className={`${styles.coursesContainer} container`}>
			<div className={styles.header}>
				<SearchBar setCourses={setCourses} setError={setError} />
				<Button className='primary' onClick={toggleCreateCourse}>
					Add new course
				</Button>
			</div>

			<div>
				{error ? (
					<h1 className={styles.errorMsg}>{error}</h1>
				) : (
					<CourseListing courses={courses} authors={authors} />
				)}
			</div>
		</section>
	);
};

export default Courses;
