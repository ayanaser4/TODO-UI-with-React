import { useState } from "react";
import styles from '../styles.module.css';

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles['todo-input-form']}>
            <input
                type="text"
                value={text}
                placeholder="Add a new task"
                onChange={(e) => setText(e.target.value)}
                className={styles['todo-input']}
            />
            <button type="submit" className={styles['todo-add-button']}>Add</button>
        </form>
    );
};

export default TodoInput;
