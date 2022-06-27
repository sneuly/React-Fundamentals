import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button, Input, Textarea } from '../../common';
import { getCourseDuration, getCurrentDate } from '../../helpers';

import styles from './CreateCourse.module.css';

const DEFAULT_STATE = {
	id: '',
	title: '',
	description: '',
	duration: 0,
	creationDate: '',
	authors: [],
};

const CreateCourse = ({ setCreateCourse, setCourses, authors, setAuthors }) => {
	const [newCourse, setNewCourse] = useState(DEFAULT_STATE);

	const { title, description, duration, authors: authorsList } = newCourse;

	const resetForm = () => setNewCourse(DEFAULT_STATE);

	const handleChange = (data) => {
		setNewCourse((prev) => ({ ...prev, ...data }));
	};

	const handleCourseCreate = () => {
		setCourses((prevState) => {
			const id = uuidv4();
			const creationDate = getCurrentDate();

			return [...prevState, { id, creationDate, ...newCourse }];
		});

		resetForm();
	};

	const handleAuthorCreate = () => {
		setCourses((prevState) => {
			const id = uuidv4();
			const creationDate = getCurrentDate();

			return [...prevState, { id, creationDate, ...newCourse }];
		});

		resetForm();
	};

	const handleCancelation = () => {
		setCreateCourse((prev) => !prev);
	};

	return (
		<section className={`${styles.createCourseWrapper} container`}>
			<div className={styles.row}>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					value={title}
					required={true}
					setValue={handleChange}
				/>
				<div className={styles.buttons}>
					<Button
						title='Create Course'
						className='primary'
						onClick={handleCourseCreate}
					/>
					<Button
						title='Back to Course Listing'
						className='danger'
						onClick={handleCancelation}
					/>
				</div>
			</div>
			<div className={styles.row}>
				<Textarea
					labelText='Description'
					placeholderText='Enter description...'
					value={description}
					minLength={2}
					required={true}
				/>
			</div>

			<div className={styles.authors}>
				<div>
					<div className={`${styles.authorsBlock} ${styles.addAuthor}`}>
						<h2 className={styles.title}>Add author</h2>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
						/>
						<Button
							title='Create author'
							className='secondary'
							onClick={handleAuthorCreate}
						/>
					</div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Duration</h2>
						<Input
							labelText='Duration'
							type='number'
							placeholderText='Enter duration in minutes...'
							pattern='[1-9]+'
							value={duration === 0 ? '' : duration}
							onKeyUp={getCourseDuration(duration)}
						/>

						<div className={styles.duration}>
							Duration:&nbsp;{getCourseDuration(duration)}
						</div>
					</div>
				</div>
				<div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Authors</h2>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
						/>
					</div>
					<div className={styles.authorsBlock}>
						<h2 className={styles.title}>Course authors</h2>
						<Input
							labelText='Duration'
							placeholderText='Enter duration in minutes...'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateCourse;
