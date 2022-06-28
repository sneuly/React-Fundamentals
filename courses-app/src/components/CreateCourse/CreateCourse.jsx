import PropTypes from 'prop-types';
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { getCourseDuration, getCurrentDate } from '../../helpers';
import CourseForm from './components/CourseForm/CourseForm';

const CreateCourse = ({
	setCreateCourse,
	setCourses,
	existingAuthors,
	setAuthors,
}) => {
	const INITIAL_STATE = {
		id: '',
		title: '',
		description: '',
		duration: '',
		creationDate: '',
		authors: existingAuthors,
		newAuthorName: '',
		courseAuthors: [],
	};

	const [newCourse, setNewCourse] = useState(INITIAL_STATE);

	const {
		title,
		description,
		duration,
		authors,
		courseAuthors,
		newAuthorName,
	} = newCourse;

	const resetForm = () => setNewCourse(INITIAL_STATE);

	const handleChange = (name, value) => {
		setNewCourse((prev) => ({ ...prev, [name]: value }));
	};

	const handleCourseCreate = () => {
		const isValid =
			duration && title && description.length > 2 && courseAuthors.length > 0;

		if (isValid) {
			setCourses((prevState) => {
				return [
					...prevState,
					{
						id: uuidv4(),
						title,
						description,
						duration: parseInt(duration),
						creationDate: getCurrentDate(),
						authors: courseAuthors.map((courseAuthor) => courseAuthor.id),
					},
				];
			});

			handleRedirectToCourses();

			resetForm();
		} else {
			alert(
				'All Fields required, description should be more than 2 symbols. Please check the form!'
			);
		}
	};

	const handleAuthorCreate = () => {
		if (newAuthorName) {
			const id = uuidv4();
			const newAuthor = { id, name: newAuthorName };

			setAuthors((prev) => [...prev, newAuthor]);

			setNewCourse((prev) => {
				const authorsWithAddition = [newAuthor, ...prev.authors];

				return { ...prev, newAuthorName: '', authors: authorsWithAddition };
			});
		} else {
			alert('Please fill the field to add an author!');
		}
	};

	const handleRedirectToCourses = () => {
		setCreateCourse((prev) => !prev);
	};

	const onAddAuthorClick = (id) => {
		setNewCourse((prev) => {
			const selectedAuthor = authors.find((author) => author.id === id);

			const authorRemovedFromList = prev.authors.filter(
				(author) => author.id !== id
			);

			const authorAddedToList = [...prev.courseAuthors, selectedAuthor];

			return {
				...prev,
				authors: authorRemovedFromList,
				courseAuthors: authorAddedToList,
			};
		});
	};

	const onRemoveAuthorClick = (id) => {
		setNewCourse((prev) => {
			const selectedAuthor = courseAuthors.find((author) => author.id === id);

			const authorRemovedFromList = prev.courseAuthors.filter(
				(author) => author.id !== id
			);

			const authorAddedToList = [...prev.authors, selectedAuthor];

			return {
				...prev,
				authors: authorAddedToList,
				courseAuthors: authorRemovedFromList,
			};
		});
	};

	return (
		<CourseForm
			title={title}
			description={description}
			duration={duration}
			authors={authors}
			courseAuthors={courseAuthors}
			newAuthorName={newAuthorName}
			handleChange={handleChange}
			handleCourseCreate={handleCourseCreate}
			handleRedirectToCourses={handleRedirectToCourses}
			handleAuthorCreate={handleAuthorCreate}
			onAddAuthorClick={onAddAuthorClick}
			onRemoveAuthorClick={onRemoveAuthorClick}
			getCourseDuration={getCourseDuration}
		/>
	);
};

CreateCourse.propTypes = {
	courses: PropTypes.array,
	setCourses: PropTypes.func,
	authors: PropTypes.array,
	setAuthors: PropTypes.func,
	setCreateCourse: PropTypes.func,
};

export default CreateCourse;
