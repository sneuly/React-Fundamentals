import { useState } from 'react';

import { Header, Courses, CreateCourse } from './components';
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
					authors={authors}
					setAuthors={setAuthors}
				/>
			) : (
				<Courses
					courses={courses}
					setCourses={setCourses}
					setCreateCourse={setCreateCourse}
					authors={authors}
				/>
			)}
		</div>
	);
}

export default App;
