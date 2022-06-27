// import { mockedAuthorsList } from '../constants';

export default function getAuthors(ids, mockedAuthorsList) {
	let authors = '';
	ids.forEach(
		(id) =>
			(authors += `${
				mockedAuthorsList.find((author) => author.id === id).name
			}, `)
	);

	return authors.replace(/,\s*$/, '');
}
