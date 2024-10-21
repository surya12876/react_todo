import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = (input) => {
    setTodos(prevTodos => [...prevTodos, input]);
    setInput(''); 
  };

  const removeTodo = (index) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]); 
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editValue;
    setTodos(updatedTodos);
    setEditIndex(null); 
  };

  return (
    <>
      <div className='max-w-4xl mx-auto p-8'>
        <div className='mb-4'>
          <label className='block text-lg font-semibold mb-2'>Enter Todo</label>
          <input 
            type="text" 
            className='border-2 border-gray-300 p-2 w-full rounded-lg' 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder='Add your task here...' 
          />
        </div>
        <div className='mb-8'>
          <input 
            type="button" 
            className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600' 
            value="Add Todo" 
            onClick={() => addTodo(input)} 
          />
        </div>

        {todos.length > 0 ? (
          <table className='min-w-full bg-white rounded-lg shadow-lg'>
            <thead>
              <tr className='bg-gray-100 text-left font-semibold'>
                <th className='p-4'>Todo</th>
                <th className='p-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index} className='border-b'>
                  <td className='p-4'>
                    {editIndex === index ? (
                      <input 
                        type="text" 
                        value={editValue} 
                        className='border-2 border-gray-300 p-2 rounded-lg w-full'
                        onChange={(e) => setEditValue(e.target.value)} 
                      />
                    ) : (
                      <span>{todo}</span>
                    )}
                  </td>
                  <td className='p-4 space-x-2'>
                    {editIndex === index ? (
                      <button 
                        className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600' 
                        onClick={() => saveTodo(index)}
                      >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h.75A2.25 2.25 0 0120.25 9v10.5A2.25 2.25 0 0118 21.75H6A2.25 2.25 0 013.75 19.5V4.5A2.25 2.25 0 016 2.25h7.5a2.25 2.25 0 012.25 2.25v.75m1.5 2.25H18m-6 6.75V9.75m0 0L7.5 9m4.5.75L12 15" />
</svg>


                      </button>
                    ) : (
                      <button 
                        className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600' 
                        onClick={() => editTodo(index)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>

                      </button>
                    )}
                    <button 
                      className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600' 
                      onClick={() => removeTodo(index)}
                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-gray-500 text-center'>No todos available. Please add one.</p>
        )}
      </div>
    </>
  );
}

export default App;
