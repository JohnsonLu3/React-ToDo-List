import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';
import ToDoItem from './ToDoItem.jsx'

class ToDoList extends React.Component {

	ToDo;
	
	state = {
		ToDo : [
				{val : "Buy Milk", checked : false},
				{val : "The the Dog a bath", checked : false},
				{val : "Take out the trash", checked : false},
				{val : "Program a ToDo List", checked : true},
			]
	}

	constructor(props){
			super(props);

			
	}
	
	render(){
		return (
			 <div id="ToDoList">
					<ul>
						{
							this.state.ToDo.map((value, index) =>{
								return <ToDoItem key={"ToDO_Key"+index} ToDoValue={value.val} ToDoChecked={value.checked} ToDoIndex={index} markChecked={this.markChecked} deleteItem={this.deleteItem}/>	
							})
						}
					 </ul>
			 </div>
		 );
	}
	
	markChecked = (id) =>{
		console.log("Mark Checked: " + id);
		
		this.state.ToDo.map((item, index) =>{
			if(index === id){
			   console.log(item);
				if (item.checked){
					item.checked = false;
				}else{
					item.checked = true;
				}
			}
			return;
		});	
		this.setState({ ToDo : this.state.ToDo});
	}
	
	deleteItem = (id) =>{
		console.log("Delete Item: " + id);
		
		this.state.ToDo.splice(id,1)
		this.setState({ ToDo : this.state.ToDo});
		
		return;
	}
}
export default ToDoList;