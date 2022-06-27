export default function findCoursesByKeyword(keyword, mockedCoursesList) {
	const keywordToLower = keyword.toLowerCase();
	if (!keyword) {
		return mockedCoursesList;
	}

	return mockedCoursesList.filter((course) => {
		let titleToLower = course.title.toLowerCase();
		let idToLower = course.id.toLowerCase();

		return (
			titleToLower.includes(keywordToLower) ||
			idToLower.includes(keywordToLower)
		);
	});
}
