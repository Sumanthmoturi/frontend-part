// app/todos/create/page.tsx
'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Define the interface for the form data
interface CreateTodoData {
  name: string;
  description: string;
  time: string; // Adjust the type based on your requirements (e.g., string, Date)
  status: 'in-progress' | 'completed';
}

const CreateTodo = () => {
  // Specify the type for useForm
  const { register, handleSubmit } = useForm<CreateTodoData>();

  const onSubmit = async (data: CreateTodoData) => {
    await axios.post('/api/todos', data);
    alert('To-Do created');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('description')} placeholder="Description" required />
      <input {...register('time')} placeholder="Time" required />
      <select {...register('status')} required>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Create To-Do</button>
    </form>
  );
};

export default CreateTodo;
