import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoItem from "../TodoItem";
import { v4 as uuid } from 'uuid';
import styles from '../styles.module.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }]);
    };

    const toggleTodo = (idx) => {
        const newTodos = [...todos];
        newTodos[idx].completed = !newTodos[idx].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (idx) => {
        const newTodos = [...todos];
        newTodos.splice(idx, 1);
        setTodos(newTodos);
    };

    return (
        <div className={styles['todo-app']}>
            <TodoInput addTodo={addTodo} />
            <ul>
                {todos.map((todo, idx) => (
                    <TodoItem
                        key={uuid()}
                        todo={todo}
                        index={idx}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
