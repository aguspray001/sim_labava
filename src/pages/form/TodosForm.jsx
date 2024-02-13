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
                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="alat" className="block text-sm font-medium leading-6 text-gray-900">
                            Alat
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="namaAlat"
                                value={todo.name_alat}
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="jumlah" className="block text-sm font-medium leading-6 text-gray-900">
                            Jumlah
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="jumlah"
                                value={todo.jumlah}
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="kondisi_pinjam" className="block text-sm font-medium leading-6 text-gray-900">
                            Kondisi Pinjam
                        </label>
                        <div className="mt-2">
                            <select
                                value={todo.kondisi_pinjam}
                                name="label"
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="kondisi_pinjam" className="block text-sm font-medium leading-6 text-gray-900">
                            Kondisi Pengembalian
                        </label>
                        <div className="mt-2">
                            <select
                                value={todo.kondisi_pinjam}
                                name="label"
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            ZIP / Postal code
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* <input
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