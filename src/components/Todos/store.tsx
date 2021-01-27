import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react';

interface Todo {
    id: string | number,
    title: string,
    isCompleted: boolean,
};

interface TodoStore {
    todos: Todo[],
    addTodo: (todo: Todo) => void,
    deleteTodo: (id: string | number) => void,
    toggleComplete: (id: string | number) => void,
}

function createTodoStore(): TodoStore {
    return {
        todos: [],
        addTodo(todo) {
            this.todos.push(todo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(item => item?.id !== id);
        },
        toggleComplete(id) {
            this.todos = this.todos.map(item => item?.id === id ? { ...item, isCompleted: !item?.isCompleted } : item);
        },
    }
};

export const StoreContext = createContext(createTodoStore());

export const StoreProvider: React.FC = ({ children }: any) => {
    const store = useLocalObservable(createTodoStore);

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};