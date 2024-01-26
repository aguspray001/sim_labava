import { useState } from "react";

function TodoForm() {
    const [todos, setTodos] = useState([{ nama_alat: "", jumlah: "", kondisi_pinjam: "", kondisi_pengembalian: "" }]);

    const handleTodoChange = (e, i) => {
        // Todo: Change todo at position i
        const field = e.target.name;
        const newTodos = [...todos];
        newTodos[i][field] = e.target.value;
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        // Todo: Append a new empty todo
        setTodos([...todos, { nama_alat: "", jumlah: "", kondisi_pinjam: "", kondisi_pengembalian: "" }]);
    };

    const handleDeleteTodo = (i) => {
        // Todo: Delete todo at position i
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(todos);
        setTodos([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            {todos.map((todo, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Nama Alat"
                        name="namaAlat"
                        value={todo.name_alat}
                        onChange={(e) => handleTodoChange(e, index)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Jumlah"
                        name="jumlah"
                        value={todo.jumlah}
                        onChange={(e) => handleTodoChange(e, index)}
                        required
                    />
                    <select
                        value={todo.kondisi_pinjam}
                        name="label"
                        onChange={(e) => handleTodoChange(e, index)}
                        required
                    >
                        <option value="">label</option>
                        <option value="important">Important</option>
                        <option value="not-important">Not Important</option>
                    </select>
                    {/* <input
                        type="text"
                        placeholder="Jumlah"
                        name="jumlah"
                        value={todo.jumlah}
                        onChange={(e) => handleTodoChange(e, index)}
                        required
                    /> */}
                    {/* <select
                        value={todo.label}
                        name="label"
                        onChange={(e) => handleTodoChange(e, index)}
                        required
                    >
                        <option value="">label</option>
                        <option value="important">Important</option>
                        <option value="not-important">Not Important</option>
                    </select> */}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
            ))}
            <button onClick={handleAddTodo}>Add Todo</button>
            <button type="submit">Submit Todos</button>
        </form>
    );
}

export default TodoForm;