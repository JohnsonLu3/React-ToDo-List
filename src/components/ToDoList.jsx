import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';
import ToDoItem from './ToDoItem.jsx'

var ToDo = [
	{val : "Buy Milk", checked : false},
	{val : "The the Dog a bath", checked : false},
	{val : "Take out the trash", checked : false},
	{val : "Program a ToDo List", checked : true},
]


function ToDoList(){
	 return (
		 <div id="ToDoList">
			 	<ul>
					{
						ToDo.map((value, index) =>{
							return <ToDoItem key={"ToDO_Key"+index} ToDoValue={value.val} Checked={value.checked} ToDoIndex={index}/>	
						})
					}
				 </ul>
		 </div>
	 );
}

export default ToDoList;