import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component
const Home = () => {
	
	const [statusLight, setStatusLight]=useState("on")
	
	const styleRectangulo ={
		
		backgroundColor: "yellow",
		width: "8rem",
		height:"24rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
		
	}

	const styleBody={

		display:"flex",
		justifyContent : "center"

	}

	const circuloRojo={
  
		background:"red",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
	

	}

	const circuloAmarillo={
		background: "orange",
		borderRadius: "50%",
		width: "100px",
		height: "100px",
	}

	const circuloVerde ={
		background: "green",
		borderRadius: "50%",
		width: "100px",
		height: "100px",
	}

	const circuloIluminado={
		background:statusLight,
		boxShadow:"-1px 10px 18px 48px rgba(0,0,0,0.86)",
		borderRadius: "50%",
		width: "100px",
		height: "100px",
	}

	function HandleClickOn(event){
console.log(event.target.id)
setStatusLight(event.target.id)


	}

	


	return (
		<div style={styleBody} className="text-center">
			
			<div  style={styleRectangulo} className="Rectangulo">
				<p id="red"onClick={HandleClickOn} style={ statusLight === "red"?circuloIluminado :circuloRojo} className="redLight"></p>
				<p id="orange" onClick={HandleClickOn}style={ statusLight === "orange"?circuloIluminado :circuloAmarillo} className="yellowLight"> </p>
				<p id="green" onClick={HandleClickOn} style ={statusLight === "green"?circuloIluminado :circuloVerde} className="greenLight"> </p>
			</div>
			


			
		</div>
	);
};

export default Home;
