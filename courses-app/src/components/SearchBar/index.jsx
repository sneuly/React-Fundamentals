import PropTypes from 'prop-types';

import { Button, Input } from '../../common';

import styles from './SearchBar.module.css';

const SearchBar = ({ keyword, setKeyword, handleReset, handleSubmit }) => {
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

SearchBar.propTypes = {
	courses: PropTypes.array,
	setError: PropTypes.func,
	setDisplayedCourses: PropTypes.func,
};

export default SearchBar;
