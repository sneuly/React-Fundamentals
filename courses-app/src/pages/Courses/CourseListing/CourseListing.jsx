import PropTypes from 'prop-types';

import { CourseCard } from '../';

const CourseListing = ({ courses }) => {
	return (
		<div>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	);
};

CourseListing.propTypes = {
	courses: PropTypes.array,
	authors: PropTypes.array,
};

export default CourseListing;
