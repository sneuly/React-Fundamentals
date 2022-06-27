import PropTypes from 'prop-types';

import { Button } from '../../../../common';

import styles from './AuthorItem.module.css';

const AuthorItem = ({ author, type, onClick }) => {
	const { name } = author;

	return (
		<div className={styles.authorItem}>
			<p>{name}</p>

			<Button
				onClick={() => onClick(author.id)}
				className={type === 'delete' ? 'danger' : 'primary'}
			>
				{type === 'delete' ? 'Remove Author' : 'Add Author'}
			</Button>
		</div>
	);
};

AuthorItem.propTypes = {
	author: PropTypes.object,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default AuthorItem;
