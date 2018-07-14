function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nR;

	nR = Math.floor(Math.random()*11);//nota random
	console.log(nR);

	if(nR >8){
		alert(nR+" " +"Exelente")
	}else if(nR>3 && nR<9){
		alert(nR +" "+"APROBO!")
	}else{
		alert("Vamos la proxima se puede")
	};

}//FIN DE LA FUNCIÓN