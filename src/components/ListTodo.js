import React, { Fragment, useEffect, useState } from 'react';

import EditTodo from './EditTodo';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        try {
            const response = await fetch('http://187.85.170.204:3333/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteTodo(id) {
        try {
            const deleteTodo = await fetch(
                `http://187.85.170.204:3333/todos/${id}`,
                {
                    method: 'DELETE',
                }
            );
            setTodos(todos.filter((todo) => todo.todo_id !== id));
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, [todos]);

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;
