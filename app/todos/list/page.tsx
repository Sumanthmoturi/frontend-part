// app/todos/list/page.tsx
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the shape of a todo item
interface Todo {
  id: number;
  name: string;
  description: string;
  status: string;
}

const ListTodos = () => {
  // Specify that todos is an array of Todo items
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get<Todo[]>('/api/todos');
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;