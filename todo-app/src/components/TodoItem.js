import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';


const TodoItem = (props) => {
	const { id, title, completed }=props;
	const dispatch=useDispatch();

	const handelCheckboxClicked=()=>{
		dispatch(toggleComplete({id,completed:!completed}));
	}
	const deleteTask=()=>{
		dispatch(deleteTodo({id}));
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' 
					className='mr-3' 
					defaultChecked={completed}
					onClick={handelCheckboxClicked}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={deleteTask}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
