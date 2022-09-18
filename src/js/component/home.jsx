import React, {useState, useEffect} from "react";
 

//create your first component
const Home = () => {
	const [todo,setTodo]=useState("")
	const [list,setList]=useState([])

	useEffect(() => {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/wishmastering', 
		{
			method: "PUT",
			body: JSON.stringify(list),
			headers: {
			  "Content-Type": "application/json"
			}}
			)
		  .then(resp => {
			  console.log(resp.ok); // will be true if the response is successfull
			  console.log(resp.status); // the status code = 200 or code = 400 etc.
			  console.log(resp.text()); // will try return the exact result as string
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		  })
		  .then(data => {
			  //here is were your code should start after the fetch finishes
			  console.log(data); //this will print on the console the exact object received from the server
		  })
		  .catch(error => {
			  //error handling
			  console.log(error);
		  });
		}, [list]);
		
	const handleKeyDown = (e) => {
		if (e.key === 'Enter'){
			setList([...list, { label: todo, done: false}])
			setTodo("")
		}
	}

	function eliminar (index){
		let newList = list.filter((element, i)=>{
			if (index !== i){
				return element;
			}
		})
			setList(newList);
			console.log(list)
	}

	return (
			<div className="container text-center w-50 h-30 text-dark mt-3">
				<div className="container-fluid">
					<h1 className="todocolor"> To-Do List</h1>
					<input type="text" 
					placeholder="Agregar tarea" 
					onChange={e=>setTodo(e.target.value)}
					onKeyDown = {handleKeyDown}
					value = {todo}
					/>
				</div>

				<div className="row">
					<div className="col-6">
						<ul className="justify-content-center text-center">
							{ list?.map((item, index) => (
								<li className="container-text-center w-50 text-dark mt-3 " key={index}> {item.label}
									<span className="displayHover float-end" onClick={()=>eliminar(index)}> X </span>								
								</li>
								))} 
						</ul>
					</div>
				</div>
			</div>		
	);
};

export default Home;
