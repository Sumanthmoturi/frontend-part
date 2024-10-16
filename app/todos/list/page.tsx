/*
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the shape of a Todo item
interface Todo {
  id: number;
  name: string;
  description: string;
  status: string;
}

const ListTodos = () => {
  // State to store the list of todos with the correct type
  const [todos, setTodos] = useState<Todo[]>([]); // Fix: Specify the type as Todo[]

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>('/api/todos'); // Fix: Specify the response type as Todo[]
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const toggleStatus = async (id: number, status: string) => {
    const newStatus = status === 'in-progress' ? 'completed' : 'in-progress';
    try {
      await axios.patch(`/api/todos/${id}`, { status: newStatus });
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      ));
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => toggleStatus(todo.id, todo.status)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
*/



'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the shape of a Todo item
interface Todo {
  id: number;
  name: string;
  description: string;
  status: string;
  time: string; // Added time field
}

const ListTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress'>('all');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>('/api/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const toggleStatus = async (id: number, status: string) => {
    const newStatus = status === 'in-progress' ? 'completed' : 'in-progress';
    try {
      await axios.patch(`/api/todos/${id}`, { status: newStatus });
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      ));
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'in-progress') return todo.status === 'in-progress';
    return true; // all
  });

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('in-progress')}>In Progress</button>
      </div>
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Time: {todo.time}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => toggleStatus(todo.id, todo.status)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
