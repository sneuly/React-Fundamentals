import { useState } from 'react';

import { Button, Input } from '../../../../common';
import { findCoursesByKeyword } from '../../../../helpers';

import styles from './SearchBar.module.css';

const ERROR_MESSAGE = 'No Courses found with this keyword. Try again!';

const SearchBar = ({ courses, setError, setDisplayedCourses }) => {
	const [keyword, setKeyword] = useState('');

	const handleSubmit = () => {
		if (findCoursesByKeyword(keyword, courses).length === 0) {
			setError(ERROR_MESSAGE);
		} else {
			setError('');
			setDisplayedCourses(findCoursesByKeyword(keyword, courses));
		}
	};

	const handleReset = () => {
		if (keyword.length <= 0) {
			setError('');
			setDisplayedCourses(courses);
		}
	};

	return (
		<>
			<div className={styles.searchBar}>
				<Input
					placeholderText='Enter course name or id...'
					className='searchInput'
					value={keyword}
					onChange={setKeyword}
					onKeyUp={handleReset}
					required={false}
				/>
				<Button className='secondary' onClick={handleSubmit}>
					Search
				</Button>
			</div>
		</>
	);
};

export default SearchBar;
