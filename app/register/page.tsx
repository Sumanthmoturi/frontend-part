// app/register/page.tsx
'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios.post('/api/users', data);
    alert('Registration successful');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('mobile')} placeholder="Mobile" required />
      <input {...register('gender')} placeholder="Gender" required />
      <input {...register('country')} placeholder="Country" required />
      <input {...register('email')} placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
