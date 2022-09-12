import React, {useState, useEffect} from "react";
 

//create your first component
const Home = () => {
	const [todo,setTodo]=useState("")
	const [list,setList]=useState([])
	
	// function "traertarea" usa FETCH y METHOD "Get" para traer el array vacio
	const traerToDo = () => {
		fetch( 'http://assets.breatheco.de/apis/fake/todos/user/wishmastering' , {
			method: "GET",
			headers: { "Content-Type":"application/json"
				}
			}
		)
		.then((response) => response.json()) // esto lo que hace es convertirlo en JSON
		.then((data) => setList(data))		 // esto lo que hace es meter el dato en "setList"
	}

	// Lo siguiente es codigo proveido directamente por 4Geeks, lo haremos en un 
	// "useEffect" para CARGAR ESE CODIGO CADA VEZ QUE ACTUALICE MI LIST
	// Ya que ese codigo que nos da 4Geeks es PRECISAMENTE para actualizar
	// en la nube "usando APIs" mi List


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
		
		// el "trigger" de este useEffect sera "list", cada vez que "list" cambia, la funcion correra



	//funcion al clikear "enter" hace que agrege a setList

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
			<div className="bg-dark">
				{// ESTE PRIMER DIV TIENE COMO OBJETIVO CENTRAR EL TITULO Y EL INPUT
				 // DONDE SE COLOCAN LAS NOTAS QUE SE QUIEREN AGREGAR
				 // el "onChange" lo que hace es identificar CUALQUIER cosa que el usuario
				 // haga en el input, el "onKeyDown" lo que hace es que al clickear
				 // aplica la funcion "handleKeyDown", esta lo que hace es que si e.key === "Enter"
				 // Entonces actualiza el array
				}
				<div className="container w-50">
					<h3 className="todocolor "> Todo List</h3>
					<input type="text" 
					placeholder="What needs to be done?" 
					onChange={e=>setTodo(e.target.value)}
					onKeyDown = {handleKeyDown}
					value = {todo}
					/>
				</div>

				{// Hice rows y cols para "acomodar mejor la lista de todo"
				}
				<div className="row">
					<div className="col-1"></div>
					<div className="col-6">
						<ul className="justify-content-center text-center">
							

							{ list?.map((item, index) => (
								<li className="bg-warning" key={index}> {item.label}
									<span className="displayHover float-end" onClick={()=>eliminar(index)}> X</span>
								
								</li>
								))} 
						</ul>
					</div>
					<div className="col-5"></div>
				</div>
			</div>
		
	);
};

export default Home;
