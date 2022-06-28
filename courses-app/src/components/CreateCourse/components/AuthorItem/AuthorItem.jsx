import PropTypes from 'prop-types';

import { Button } from '../../../../common';

import styles from './AuthorItem.module.css';

const classNameMap = { delete: 'danger', create: 'primary' };
const actionsMap = { delete: 'Remove Author', create: 'Add Author' };

const AuthorItem = ({ author, type, onClick }) => {
	const { name } = author;

	return (
		<div className={styles.authorItem}>
			<p>{name}</p>

			<Button onClick={() => onClick(author.id)} className={classNameMap[type]}>
				{actionsMap[type]}
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
