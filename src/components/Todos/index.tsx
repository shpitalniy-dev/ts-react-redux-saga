import React, { useContext } from 'react';
import shortid from 'shortid';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react';
import { StoreProvider, StoreContext } from './store';

const Todos = observer(() => {
    const store = useContext(StoreContext);
    const { todos, addTodo, toggleComplete, deleteTodo } = store;

    const handleToggleComplete = (id: string | number): void => {
        toggleComplete(id);
    }

    const handleDelete = (id: string | number): void => {
        deleteTodo(id);
    }

    const handleAddTodo = (): void => {
        const title = prompt('Type title of the task');
        if (title) {
            addTodo({ title, id: shortid.generate(), isCompleted: false });
        }
    }

    return (
        <div>
            <ul>
                {todos?.map(item =>
                    <li key={item?.id}>
                        <span style={{ textDecoration: item?.isCompleted ? 'line-through' : 'none'}}>
                            {item?.title}
                        </span>
                        <button onClick={() => handleToggleComplete(item.id)}>
                            {item?.isCompleted ? 'Uncomplete' : 'Completed'}
                        </button>
                        <button onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                    </li>)}
            </ul>
            <div>
                <div>
                    <button onClick={handleAddTodo}>
                        Add task
                    </button>
                </div>
            </div>
        </div>
    );
});

export default () => (
    <StoreProvider>
        <Todos />
    </StoreProvider>
);