import { Button, Input, Textarea } from '../../../../common';

import AuthorItem from '../AuthorItem/AuthorItem';

import styles from './CourseForm.css';

const CourseForm = ({
	title,
	handleChange,
	handleCourseCreate,
	handleRedirectToCourses,
	description,
	newAuthorName,
	handleAuthorCreate,
	duration,
	authors,
	onAddAuthorClick,
	courseAuthors,
	onRemoveAuthorClick,
	getCourseDuration,
}) => {
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

export default CourseForm;
