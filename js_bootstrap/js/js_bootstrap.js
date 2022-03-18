function creaCampos () {
	const input = document.createElement("input");
	input.type="text";
	input.placeholder="Pon tu nombre.Minimo 4 caracteres";
	document.getElementById("contenedor_campo").appendChild(input);
	document.getElementsByTagName('input')[0].value;
	input.onblur=salida;
}

function salida () {
	var campo = document.getElementsByTagName("input")[0].value;
	var objeto = document.getElementById("contenedor_aviso");
	if (campo.length<4){
		objeto.className="alert alert-danger";
		objeto.innerHTML="El campo debe ser de mas de 4 caracteres";
	}
	else {
		objeto.className="alert alert-success";
		objeto.innerHTML="El campo cumple las condiciones";
	}
	}

