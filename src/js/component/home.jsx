import React, {useState} from "react";
 

//create your first component
const Home = () => {
	const [todo,todoUpdate]=useState("")
	const [list,listUpdate]=useState([])
	
	// const addToList = list.map("<li> list.[] </li>")

	//funcion al clikear "enter" hace que agrege a listUpdate

	const handleKeyDown = (e) => {
		if (e.key === 'Enter'){
			listUpdate([...list, todo])
		}
	}

	// const deleteTodo = () => {
	// 	let newTodo = list.filter((item, index) => )
	// }

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
					className="todo" 
					onChange={(e)=>{todoUpdate(e.target.value)}}
					onKeyDown = {handleKeyDown}
					/>
				</div>

				{// Hice rows y cols para "acomodar mejor la lista de todo"
				}
				<div className="row">
					<div className="col-1"></div>
					<div className="col-6">
						<ul className="justify-content-center text-center">
							
							{// Aca lo que hicimos fue hacer un "map" (recorrer TODOS los objetos del array)
							 // y luego definimos "item" (esto es el texto o variable que uno escriba)
							 // "index" (esto es la posicion especifica del objeto en array)
							 // luego hacemos arrow function y "escribimos como queremos que se vea el texto"
							 // abrimos con un <li> y le damos atributos como el "key, que usa el index"
							 // ME PARECE que eso es necesario para que entonces se DEFINA 
							 // como unico ese elemento del array y despues poder manipularlo mejor
							}
							{ list.map((item, index) => (
								<li className="bg-warning" key={index}> {item} 
									<button type="button" className="btn-close float-end displayHover" aria-label="Close"></button> 
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
