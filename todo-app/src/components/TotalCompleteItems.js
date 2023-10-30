import React from 'react';
import {  useSelector } from 'react-redux';


const TotalCompleteItems = () => {
	let itemCompleted= useSelector(state=>state.todos.filter(task=>task.completed===true));
	let items= useSelector(state=>state.todos.length);
	return (
		<div className='d-flex justify-content-between'>
			<h4 className='mt-3 '>Total Items: {items}</h4>
			<h4 className='mt-3'>Total Complete Items: {itemCompleted.length}</h4>
		</div>
	);
};

export default TotalCompleteItems;
