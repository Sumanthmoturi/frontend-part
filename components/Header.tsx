const Header = () => {
    return (
      <header className="flex justify-center items-center bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Todo App</h1>
        <nav className="flex space-x-4">
          <a href="/login" className="text-white">Login</a>
          <a href="/register" className="text-white">Register</a>
          <a href="/todos/list" className="text-white">Todo List</a>
          <a href="/todos/create" className="text-white">Create Todo</a>
        </nav>
      </header>
    );
  };
export default Header;