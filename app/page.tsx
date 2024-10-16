/*
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">Welcome to the Todo App</h1>
      <p className="mt-4">
        Please <a href="/login" className="text-blue-500">Login</a> or <a href="/register" className="text-blue-500">Register</a> to get started.
      </p>
    </div>
  );
};

export default HomePage;
*/

'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token); // Sets loggedIn based on whether the token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <nav className="my-4">
        {loggedIn ? (
          <>
            <Link href="/todos/list" className="mr-4">List</Link>
            <Link href="/todos/create" className="mr-4">Create Todo</Link>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="mr-4">Login</Link>
            <Link href="/register" className="mr-4">Register</Link>
          </>
        )}
      </nav>

      <h2 className="text-xl">Develop using NextJS(UI) and NestJS(API) in Typescript</h2>

      <h3 className="text-lg font-semibold mt-4">Screens:</h3>
      <ul className="list-disc ml-5">
        <li>Register</li>
        <li>Login</li>
        <li>Create To Do</li>
        <li>List the To Dos (Paginated)</li>
      </ul>

      <h3 className="font-semibold mt-4">Register: The fields will be -</h3>
      <ul className="list-disc ml-5">
        <li>Name</li>
        <li>Mobile</li>
        <li>Gender</li>
        <li>Country</li>
        <li>Hobbies</li>
        <li>Email</li>
        <li>Password</li>
      </ul>

      <h3 className="font-semibold mt-4">Login: The fields will be</h3>
      <ul className="list-disc ml-5">
        <li>Mobile</li>
        <li>Password</li>
      </ul>

      <h3 className="font-semibold mt-4">Create To Do: The fields will be</h3>
      <ul className="list-disc ml-5">
        <li>Name</li>
        <li>Description</li>
        <li>Time</li>
        <li>Status (In Progress / Completed)</li>
      </ul>

      <h3 className="font-semibold mt-4">List of To Dos (Paginated)</h3>
      <ul className="list-disc ml-5">
        <li>Option to see the list with completed todos</li>
        <li>Option to see the list with in progress todos</li>
        <li>Update the To Do Status (In Progress ←→ Completed)</li>
      </ul>

      <p className="mt-5">&copy; 2024 Todo App</p>
    </div>
  );
};

export default HomePage;
