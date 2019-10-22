import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';

class ToDoItem extends React.Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
					
	const id = this.props.ToDoIndex;
	const todoID = "toDo_" + this.props.ToDoIndex;
	const checkboxID = "checkBox_" + this.props.ToDoIndex;
	const trashButtID = "trashButt_" + this.props.ToDoIndex;
	const checked = this.props.ToDoChecked;	
		
		return (
				<li id={todoID}>
					
					{
						checked ? 
							(<input id={checkboxID} type="checkbox" checked onChange={this.props.markChecked.bind(this, id)} />)
						:
							(<input id={checkboxID} type="checkbox" onChange={this.props.markChecked.bind(this, id)} />)
					}
					
					<label for={checkboxID}>{this.props.ToDoValue}</label>

					<button onClick={this.props.deleteItem.bind(this, id)} id={trashButtID} value={checkboxID} className="trashButt">
						<p>X</p>
					</button>
				</li>
		 );
	}


}

export default ToDoItem;