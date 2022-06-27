import PropTypes from 'prop-types';

import { CourseCard } from '../../../index';

const CourseListing = ({ courses, authors }) => {
	return (
		<div>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} authors={authors} />
			))}
		</div>
	);
};

CourseListing.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
};

export default CourseListing;
