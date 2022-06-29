import { useState } from 'react';

import { Courses, CreateCourse } from './pages';
import { Header } from '../src/components';

import { mockedCoursesList, mockedAuthorsList } from './constants';

import './App.css';

function App() {
	const [courses, setCourses] = useState([...mockedCoursesList]);
	const [authors, setAuthors] = useState([...mockedAuthorsList]);
	const [createCourse, setCreateCourse] = useState(false);

	return (
		<div>
			<Header />

			{createCourse ? (
				<CreateCourse
					setCourses={setCourses}
					setCreateCourse={setCreateCourse}
					existingAuthors={authors}
					setAuthors={setAuthors}
				/>
			) : (
				<Courses
					courses={courses}
					setCreateCourse={setCreateCourse}
					authors={authors}
				/>
			)}
		</div>
	);
}

export default App;
