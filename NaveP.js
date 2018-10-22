//variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var AreaH = canvas.height;
var AreaW = canvas.width;
var boom = document.createElement("audio");
var nan = document.createElement("audio");
var nivel = 0;
var vidas = 3;
var ju1 = crearTMIP("Coloque su nombre");
var perdiste = crearTM("perdiste");
var puntos = 0;
var puntosA;
var reglas = crearTM("Los puntos rojos son puntos,No choques con los meteoritos");
var ju;
var bucle; 
var bloque = {
	x : 300,
	y : 190,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 5,
	img : document.createElement('img')
};
var enea = {
	x : 513,
	y : 250,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var eneb = { 
	x : 513,
	y : 15,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var enec = {
	x : 513,
	y : 50,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var ened = {
	x : 513,
	y : 100,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var enee = {
	x : 513,
	y : 160,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var enef = {
	x : 513,
	y : 210,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,5),
	img : document.createElement('img')
};
var eneg = {
	x : 514,
	y : 130,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,3),
	img : document.createElement('img')
};
var eneh = {
	x : 514,
	y : 15,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,3),
	img : document.createElement('img')
};
var enei = {
	x : 514,
	y : 250,
	alto : 45,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : velocidadA(1,3),
	img : document.createElement('img')
};
var muneco = {
	x : 20,
	y : numeroA(0,280),
	alto : 25,
	ancho : 40,
	arriba : false,
	abajo : false,
	izquierda : false,
	derecha : false,
	velocidad : 7,
	img : document.createElement('img')
}
muneco.img.src = 'img/ovni.png';
enea.img.src = 'img/meteorito.png';
eneb.img.src = 'img/meteorito.png';
enec.img.src = 'img/meteorito.png';
ened.img.src = 'img/meteorito.png';
enee.img.src = 'img/meteorito.png';
enef.img.src = 'img/meteorito.png';
eneg.img.src = 'img/punto.png';
eneh.img.src = 'img/punto.png';
enei.img.src = 'img/punto.png';
bloque.img.src = 'img/Bloque.png';
boom.src = 'img/Crash.mp3'
nan.src = 'img/Nan.mp3'
//Clases
class Informacion {
	constructor() {
		
	}
	dibujar() {
		ctx.fillStyle = 'black';
		ctx.font = "18px Arial";
		ctx.fillText("El jugador es: "+ju, 10, 15);
		ctx.fillText("Puntos: "+puntos, 320, 15);
		ctx.fillText("Vidas: "+vidas, 500, 15);
	}
}
//Objetos
var info = new Informacion();
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 40) {
		muneco.arriba = true;
	}
	if (event.keyCode == 38) {
		muneco.abajo = true;
	}
});
document.addEventListener("keyup", function(event) {
	if (event.keyCode == 40) {
		muneco.arriba = false;
	}
	if (event.keyCode == 38) {
		muneco.abajo = false;
	}
});
//funciones
function velocidadA(num1, num2) {
	return Math.round(Math.random() * num2 + num1);
}
function crearTM(msj) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var t = document.createTextNode(msj); 
	f.appendChild(m);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var x = document.createTextNode("X");
	cerrar.appendChild(x);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}

function crearTMIP(text, nombre) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var inp = document.createElement('input'); 
	var t = document.createTextNode(text); 
	inp.type = text;
	inp.id = nombre;
	inp.name = nombre;
	f.appendChild(m);
	m.appendChild(inp);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var e = document.createTextNode("Enviar");
	cerrar.appendChild(e);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
		frame();
		if (inp.value == false) {
			ju = "Predeterminado";
		} else {
			ju = inp.value;
		}
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}
function mostrarM(obj) {
	obj.style.visibility = "visible";
}
function numeroA(num1, num2) {
	return Math.round((Math.random() * num2) + num1);
}
function moverE() {
	if (enea.izquierda && enea.x < canvas.width - 40) {
		enea.x -= enea.velocidad;
	}
	if (eneb.izquierda && eneb.x < canvas.width - 40) {
		eneb.x -= eneb.velocidad;
	}
	if (enec.izquierda && enec.x < canvas.width - 40) {
		enec.x -= enec.velocidad;
	}
	if (ened.izquierda && ened.x < canvas.width - 40) {
		ened.x -= ened.velocidad;
	}
	if (enee.izquierda && enee.x < canvas.width - 40) {
		enee.x -= enee.velocidad;
	}
	if (enef.izquierda && enef.x < canvas.width - 40) {
		enef.x -= enef.velocidad;
	}
	if (eneg.izquierda && eneg.x < canvas.width - 40) {
		eneg.x -= eneg.velocidad;
	}
	if (eneh.izquierda && eneh.x < canvas.width - 40) {
		eneh.x -= eneh.velocidad;
	}
	if (enei.izquierda && enei.x < canvas.width - 40) {
		enei.x -= enei.velocidad;
	}
}
function moverM() {
	if (muneco.izquierda && muneco.x < canvas.width - 40) {
		muneco.x += muneco.velocidad;
	}
	if (muneco.derecha && muneco.x > 0) {
		muneco.x -= muneco.velocidad;
	}
	if (muneco.arriba && muneco.y < canvas.height - 30) {
		muneco.y += muneco.velocidad;
	}
	if (muneco.abajo && muneco.y > 0) {
		muneco.y -= muneco.velocidad;
	}
}
function dibujarE() {	
	ctx.drawImage(enea.img, enea.x, enea.y, enea.ancho, enea.alto);
	ctx.drawImage(eneb.img, eneb.x, eneb.y, enea.ancho, enea.alto);
	ctx.drawImage(enec.img, enec.x, enec.y, enea.ancho, enea.alto);
	ctx.drawImage(ened.img, ened.x, ened.y, enea.ancho, enea.alto);
	ctx.drawImage(enee.img, enee.x, enee.y, enea.ancho, enea.alto);
	ctx.drawImage(enef.img, enef.x, enef.y, enea.ancho, enea.alto);
}
function dibujarP() {
	ctx.drawImage(eneg.img, eneg.x, eneg.y);
	ctx.drawImage(eneh.img, eneh.x, eneh.y);
	ctx.drawImage(enei.img, enei.x, enei.y);
}
function dibujarM() {
	ctx.drawImage(muneco.img, muneco.x, muneco.y, muneco.ancho, muneco.alto);
}
function playS(s) {
	s.currentTime = 0;
	s.play();
}
function Fin() {
	var puntosV = crearTM("Tu puntuacion es: "+puntos);
	mostrarM(perdiste);
	mostrarM(puntosV);
	setInterval(function() {
		document.location.reload();
	} ,3000);
}
function perderV() {
	if (vidas > 0) {
		vidas = vidas - 1;
	} else {
		Fin();
	}
}
function actualizar() {
 	moverM();
 	moverE();
}
function colisiones() {
	if (enea.x < -10) {
		enea.x = 513;
	}
	if (eneb.x < -10) {
		eneb.x = 513;
	}
	if (enec.x < -10) {
		enec.x = 513;
	}
	if (ened.x < -10) {
		ened.x = 513;
	}
	if (enee.x < -10) {
		enee.x = 513;
	}
	if (enef.x < -10) {
		enef.x = 513;
	}
	if (eneg.x < -10) {
		eneg.x = 513;
	}
	if (eneg.x < -10) {
		eneh.x = 513;
	}
	if (eneg.x < -10) {
		eneg.x = 513;
	}
	if (eneh.x < -10) {
		eneh.x = 513;
	}
	if (enei.x < -10) {
		enei.x = 513;
	}
	/////////////////////////
	//a
	if (muneco.y > 229 && muneco.y < 280 && muneco.x > 0 && muneco.x < 570 && muneco.x > enea.x) {
		perderV();
		enea.x = 513;
		playS(boom);
	}
	//b
	if (muneco.y > -4 && muneco.y < 54 && muneco.x > 0 && muneco.x < 570 && muneco.x > eneb.x) {
		perderV();
		eneb.x = 513;
		playS(boom);
	}
	//c
	if (muneco.y > 32 && muneco.y < 81 && muneco.x > 0 && muneco.x < 570 && muneco.x > enec.x) {
		perderV();
		enec.x = 513;
		playS(boom);
	}
	//d
	if (muneco.y > 80 && muneco.y < 138 && muneco.x > 0 && muneco.x < 570 && muneco.x > ened.x) {
		perderV();
		ened.x = 513;
		playS(boom);
	}
	//e
	if (muneco.y > 143 && muneco.y < 199 && muneco.x > 0 && muneco.x < 570 && muneco.x > enee.x) {
		perderV();
		enee.x = 513;
		playS(boom);
	}
	//f
	if (muneco.y > 199 && muneco.y < 242 && muneco.x > 0 && muneco.x < 570 && muneco.x > enef.x) {
		perderV();
		enef.x = 513;
		playS(boom);
	}
	//g
	if (muneco.y > -4 && muneco.y < 31 && muneco.x > 0 && muneco.x < 570 && muneco.x > eneh.x) {
		eneh.x = 513;
		puntos = puntos + 5;
		playS(nan);
	}
	//h
	if (muneco.y > 115 && muneco.y < 143 && muneco.x > 0 && muneco.x < 570 && muneco.x > eneg.x) {
		eneg.x = 513;
		puntos = puntos + 5;
		playS(nan);
	}
	//i
	if (muneco.y > 227 && muneco.y < 269 && muneco.x > 0 && muneco.x < 570 && muneco.x > enei.x) {
		enei.x = 513;
		puntos = puntos + 5;
		playS(nan);
	}
}
function dibujar() {
	ctx.clearRect(0,0,AreaW, AreaH);
	dibujarM();
	dibujarP();
	dibujarE();
	info.dibujar();
}
function frame() {
	actualizar();
	colisiones();
	dibujar();
	setInterval(function() {
		enea.izquierda = true;
		eneb.izquierda = true;
		enec.izquierda = true;
		ened.izquierda = true;
		enee.izquierda = true;
		enef.izquierda = true;
		eneg.izquierda = true;
		eneh.izquierda = true;
		enei.izquierda = true;
	} ,0);
	bucle = requestAnimationFrame(frame);
}
function iniciar() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
	mostrarM(reglas);
	mostrarM(ju1);
}