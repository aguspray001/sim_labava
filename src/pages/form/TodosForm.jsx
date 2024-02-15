import { useState } from "react";

function TodoForm() {
    const [todos, setTodos] = useState([{ namaAlat: "", jumlah: "", kondisi_pinjam: "", kondisi_pengembalian: "" }]);

    const handleTodoChange = (e, i) => {
        const field = e.target.name;
        const newTodos = [...todos];
        newTodos[i][field] = e.target.value;
        setTodos(newTodos);
    };

    const handleAddTodo = () => {
        setTodos([...todos, { namaAlat: "", jumlah: "", kondisi_pinjam: "", kondisi_pengembalian: "" }]);
    };

    const handleDeleteTodo = (i) => {
        const newTodos = todos.filter((todo, index) => index !== i);
        setTodos(newTodos);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(todos);
        setTodos([]);
    };

    return (
        <form className="pl-4 pb-2" onSubmit={handleSubmit}>
            {todos.map((todo, index) => (
                <div key={index} className="grid grid-cols-9 gap-4 pb-2">
                    <div className="sm:col-span-2 sm:col-start-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Alat
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="namaAlat"
                                value={todo.namaAlat}
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
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
                            <input
                                type="text"
                                name="kondisi_pinjam"
                                value={todo.kondisi_pinjam}
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="kondisi_pengembalian" className="block text-sm font-medium leading-6 text-gray-900">
                            Kondisi Pengembalian
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="kondisi_pengembalian"
                                value={todo.kondisi_pengembalian}
                                onChange={(e) => handleTodoChange(e, index)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
            ))}
            <div>
                <button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={handleAddTodo}>Add Todo</button>
            </div>
        </form>
    );
}

export default TodoForm;
