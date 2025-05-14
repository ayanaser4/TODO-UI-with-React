import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
    return (
        <li className={styles['todo-item']}>
            <span
                onClick={() => toggleTodo(index)}
                className={`${styles['todo-text']} ${todo.completed ? styles.completed : ''}`}
            >
                {todo.text}
            </span>
            <div className={styles['todo-actions']}>
                <button onClick={() => toggleTodo(index)} className={styles['todo-button']} title="Toggle Complete">
                    <FontAwesomeIcon icon={faCheck} color="green" />
                </button>
                <button onClick={() => deleteTodo(index)} className={styles['todo-button']} title="Delete">
                    <FontAwesomeIcon icon={faTrash} color="red" />
                </button>
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoItem;
