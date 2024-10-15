// app/login/page.tsx
'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Handle login logic
    alert('Login successful');
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
