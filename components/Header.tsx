const Header = () => {
    return (
        <header>
            <h1>Todo App</h1>
            <nav>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/todos/list">Todo List</a>
                <a href="/todos/create">Create Todo</a>
            </nav>
        </header>
    );
};

export default Header;
