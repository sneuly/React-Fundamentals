import { useState, useEffect } from 'react';

import { Button, Input } from '../../../../common';
import { findCoursesByKeyword } from '../../../../helpers';

import styles from './SearchBar.module.css';

const ERROR_MESSAGE = 'No Courses found with this keyword. Try again!';

const SearchBar = ({ setCourses, setError }) => {
	const [keyword, setKeyword] = useState('');

	const handleSubmit = () => {
		if (findCoursesByKeyword(keyword).length === 0) {
			setError(ERROR_MESSAGE);
		} else {
			setError('');
			setCourses(findCoursesByKeyword(keyword));
		}
	};

	const handleReset = () => {
		if (keyword.length <= 0) {
			setError('');
			setCourses(findCoursesByKeyword(keyword));
		}
	};

	return (
		<>
			<div className={styles.searchBar}>
				<Input
					placeholderText='Enter course name or id...'
					className='searchInput'
					value={keyword}
					setValue={setKeyword}
					onKeyUp={handleReset}
					required={false}
				/>
				<Button title='Search' className='secondary' onClick={handleSubmit} />
			</div>
		</>
	);
};

export default SearchBar;
