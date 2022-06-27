import { AuthorItem } from '../../../index';

import styles from './AuthorsListing.module.css';

const AuthorsListing = ({ authors }) => {
	return (
		<div className={styles.authorsListing}>
			{authors.map((author) => (
				<AuthorItem key={author.id} author={author} />
			))}
		</div>
	);
};

export default AuthorsListing;
