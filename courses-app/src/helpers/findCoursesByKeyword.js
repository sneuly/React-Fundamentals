import { mockedCoursesList } from '../constants';

export default function findCoursesByKeyword(keyword) {
	const keywordToLower = keyword.toLowerCase();

	return mockedCoursesList.filter((course) => {
		let titleToLower = course.title.toLowerCase();
		let idToLower = course.id.toLowerCase();

		return (
			titleToLower.includes(keywordToLower) ||
			idToLower.includes(keywordToLower)
		);
	});
}
