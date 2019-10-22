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
				
				<button id="addButton" onClick={this.showAddNote}>
					<p>+</p>
				</button>
				
				<div id="addModal" className="hide">
					<div className="container">
						<h2>Add New Note</h2>
						<input id="addNoteInput" type="Text" placeholder="Wash the dishes..."></input>
						<br/>
						<div className="dualButtons">
							<button className="goodButt" onClick={this.addNote}>ADD</button>
							<button className="badButt" onClick={this.cancelNote}>CANCEL</button>
						</div>
					</div>
				</div>
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
	
	showAddNote = () =>{
		console.log("Adding Note...")
		
		var modal = document.getElementById("addModal");
		modal.classList.remove("hide");
		
		return;
	}
	
	cancelNote = () =>{
		console.log("Canceling Note...")
		var modal = document.getElementById("addModal");
		var addNoteInput = document.getElementById("addNoteInput");
		modal.classList.add("hide");
		addNoteInput.value = "";
		
		return;
	}
	
	addNote = () =>{
		console.log("Canceling Note...")
		var modal = document.getElementById("addModal");
		var addNoteInput = document.getElementById("addNoteInput");
		modal.classList.add("hide");
		
		this.state.ToDo.push(
			{val : addNoteInput.value, checked : false});
		addNoteInput.value = "";
		this.setState({ ToDo : this.state.ToDo});
		
		return;
	}
	
}
export default ToDoList;