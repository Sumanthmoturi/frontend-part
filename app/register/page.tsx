'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Define the shape of the form data
interface RegisterForm {
  name: string;
  mobile: string;
  gender: string;
  country: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await axios.post('/api/users', data);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please try again.');
    }
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
