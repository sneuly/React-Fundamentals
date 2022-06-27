import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button, Input, Textarea } from '../../common';
import { getCourseDuration, getCurrentDate } from '../../helpers';
import { AuthorItem } from '../../components/index';

import styles from './CreateCourse.module.css';

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
			duration && title && description.length > 2 && authors.length > 0;

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
		const id = uuidv4();
		const newAuthor = { id, name: newAuthorName };

		setAuthors((prev) => [...prev, newAuthor]);

		setNewCourse((prev) => {
			const authorsWithAddition = [newAuthor, ...prev.authors];

			return { ...prev, newAuthorName: '', authors: authorsWithAddition };
		});
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
		<section className={`${styles.createCourseWrapper} container`}>
			<div className={styles.row}>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					value={title}
					required={true}
					onChange={(value) => handleChange('title', value)}
				/>
				<div className={styles.buttons}>
					<Button className='primary' onClick={handleCourseCreate}>
						Create Course
					</Button>
					<Button className='danger' onClick={handleRedirectToCourses}>
						Back to Course Listing
					</Button>
				</div>
			</div>
			<div className={styles.row}>
				<Textarea
					labelText='Description'
					placeholderText='Enter description...'
					value={description}
					minLength={2}
					required={true}
					onChange={(value) => handleChange('description', value)}
				/>
			</div>

			<div className={styles.authors}>
				<div>
					<div className={`${styles.authorsBlock} ${styles.addAuthor}`}>
						<h2 className={styles.title}>Add author</h2>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
							value={newAuthorName}
							onChange={(value) => handleChange('newAuthorName', value)}
						/>
						<Button className='secondary' onClick={handleAuthorCreate}>
							Create author
						</Button>
					</div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Duration</h2>
						<Input
							labelText='Duration'
							type='number'
							placeholderText='Enter duration in minutes...'
							value={duration}
							required={true}
							onChange={(value) => {
								if (value === '0') {
									handleChange('duration', '');
								} else {
									handleChange('duration', value);
								}
							}}
						/>

						<div className={styles.duration}>
							Duration:&nbsp;{getCourseDuration(duration)}
						</div>
					</div>
				</div>
				<div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Authors</h2>
						{!authors.length ? (
							<p className={styles.errorMessage}>
								There are not any more authors. Please create a new author!
							</p>
						) : (
							<div>
								{authors.map((author) => (
									<AuthorItem
										key={author.id}
										author={author}
										onClick={onAddAuthorClick}
									/>
								))}
							</div>
						)}
					</div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Course authors</h2>
						{!courseAuthors.length ? (
							<p className={styles.errorMessage}>Authors list is empty!</p>
						) : (
							<div>
								{courseAuthors.map((author) => (
									<AuthorItem
										key={author.id}
										author={author}
										type='delete'
										onClick={onRemoveAuthorClick}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateCourse;
