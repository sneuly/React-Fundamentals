export default function getAuthors({ course, authors = [] }) {
	return authors.filter((author) => course?.authors?.includes(author.id));
}
