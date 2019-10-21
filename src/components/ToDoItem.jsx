import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';

class ToDoItem extends React.Component {
	
	id;
	todoID;
	checkboxID;
	trashButtID;
	checked;
	
	constructor(props){
		super(props);
		
		this.id = this.props.ToDoIndex;
		this.todoID = "toDo_" + this.props.ToDoIndex;
		this.checkboxID = "checkBox_" + this.props.ToDoIndex;
		this.trashButtID = "trashButt_" + this.props.ToDoIndex;
		this.checked = this.props.ToDoChecked;
	}
	
	render(){
					
		return (
				<li id={this.todoID}>
					
					{
						this.checked ? 
							(<input id={this.checkboxID} type="checkbox" checked onChange={this.props.markChecked.bind(this, this.id)} />)
						:
							(<input id={this.checkboxID} type="checkbox" onChange={this.props.markChecked.bind(this, this.id)} />)
					}
					
					<label for={this.checkboxID}>{this.props.ToDoValue}</label>

					<button onClick={this.props.deleteItem.bind(this, this.id)} id={this.trashButtID} value={this.checkboxID} className="trashButt">
						<p>X</p>
					</button>
				</li>
		 );
	}


}

export default ToDoItem;