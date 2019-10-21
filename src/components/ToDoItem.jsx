import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';

class ToDoItem extends React.Component {
	
	todoID;
	checkboxID;
	trashButtID;
	checked;
	
	constructor(props){
		super(props);
		
		this.todoID = "toDo_" + this.props.ToDoIndex;
		this.checkboxID = "checkBox_" + this.props.ToDoIndex;
		this.trashButtID = "trashButt_" + this.props.ToDoIndex;
		this.checked = this.props.Checked;
	}
	
	render(){
			return (
				<li id={this.todoID}>
					
					{
						this.checked ? 
							(<input id={this.checkboxID} type="checkbox" checked></input>)
						:
							(<input id={this.checkboxID} type="checkbox"></input>)
					}
					
					<label for={this.checkboxID}>{this.props.ToDoValue}</label>

					<button onClick={this.deleteItem} id={this.trashButtID} value={this.checkboxID} className="trashButt">
						<p>X</p>
					</button>
				</li>
		 );
	}

	deleteItem(){
		console.log(this.todoID);
	}
}

export default ToDoItem;