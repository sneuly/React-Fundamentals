export default function findCoursesByKeyword(keyword, courses) {
	if (!keyword) {
		return courses;
	}

	const keywordToLower = keyword.toLowerCase();

	return courses.filter((course) => {
		const titleToLower = course.title.toLowerCase();
		const idToLower = course.id.toLowerCase();

		return (
			titleToLower.includes(keywordToLower) ||
			idToLower.includes(keywordToLower)
		);
	});
}
