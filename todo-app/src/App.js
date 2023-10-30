import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5' style={{border:'1px solid black',borderRadius:"3vh"}}>
			<h1 className="text-center text-danger fw-bolder">My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
