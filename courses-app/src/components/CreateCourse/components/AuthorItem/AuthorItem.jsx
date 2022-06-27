import { Button } from '../../../../common';

import styles from './AuthorItem.module.css';

const AuthorItem = ({ author }) => {
	const { name } = author;
	return (
		<div className={styles.authorItem}>
			<p>{name}</p>

			<Button />
		</div>
	);
};

export default AuthorItem;
