import React, {useState} from "react";
 

//create your first component
const Home = () => {
	const [todo,todoUpdate]=useState("")
	const [list,listUpdate]=useState("")
	
	
	// FUNCION SE LLAMA DENTRO DEL INPUT PARA QUE SE VEA MEJOR 
	//function handleTodo(e){
	// 	todoUpdate(e.target.value);
	// }

	function handleList(e){
		listUpdate(e.target.value);
	}

	return (
			<div className=" text-center">
				<h3> ToDo List</h3>
				<input type="text" 
				placeholder="What needs to be done?" 
				className="todo" 
				onChange={(e)=>{todoUpdate(e.target.value)}}
				eventKeypress={(e)=>{todoUpdate(e.target.value)}}
				/>
			</div>
		
	);
};

export default Home;
