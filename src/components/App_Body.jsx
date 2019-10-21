import React from 'react';
import '../style/App.scss';
import '../style/Main.scss';
import ToDoList from './ToDoList.jsx';


function App_Body(){
	 return (
		 <main>
			<ToDoList />
		 	<button id="addButton">
		 		<p>+</p>
		 	</button>
		 </main>
	 );
}

export default App_Body;