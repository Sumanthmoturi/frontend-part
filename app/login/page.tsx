'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Define the shape of the form data
interface LoginForm {
  mobile: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      // Make an API call for login
      const response = await axios.post('http://localhost:3001/login', data);
      // Handle successful login
      alert('Login successful');
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('mobile')} placeholder="Mobile" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
