import React, { Fragment, useState } from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState('');

    async function onSubmitForm(e) {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://187.85.170.204:3333/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            setDescription('');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista Todos</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
