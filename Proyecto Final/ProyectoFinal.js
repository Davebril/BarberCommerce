
function Sillon(marca,modelo,anio) {
	this.marca = marca;
	this.modelo = modelo;
	this.anio = anio;
}
 

let sillon1 = new Sillon("acme","munich",2010)
console.log("Las propiedades JSON de sillon1 son: " + JSON.stringify(sillon1))
let sillon2 = new Sillon("argen","paris",2011)
console.log("Las propiedades JSON de sillon2 son: " + JSON.stringify(sillon2))
let sillon3 = new Sillon("canon","madrid",2012)
console.log("Las propiedades JSON de sillon3 son: " + JSON.stringify(sillon3))
let sillon4 = new Sillon("doral","roma",2013)
console.log("Las propiedades JSON de sillon4 son: " + JSON.stringify(sillon4))
let sillon5 = new Sillon("king","london",2014)
console.log("Las propiedades JSON de sillon5 son: " + JSON.stringify(sillon5))


let polo = document.getElementById("polo")
let sillonUno = document.getElementById("silla1")
let sillonDos = document.getElementById("silla2")
let sillonTres = document.getElementById("silla3")
let sillonCuatro = document.getElementById("silla4")
let sillonCinco = document.getElementById("silla5")
let txt = document.getElementById("text")
let sumar = document.getElementById("suma")
let total = document.getElementById("total")
let restar = document.getElementById("resta")
let sumar2 = document.getElementById("suma2")
let total2 = document.getElementById("total2")
let restar2 = document.getElementById("resta2")
let sumar3 = document.getElementById("suma3")
let total3 = document.getElementById("total3")
let restar3 = document.getElementById("resta3")
let sumar4 = document.getElementById("suma4")
let total4 = document.getElementById("total4")
let restar4 = document.getElementById("resta4")
let sumar5 = document.getElementById("suma5")
let total5 = document.getElementById("total5")
let restar5 = document.getElementById("resta5")
let descsillon1 = document.getElementById("descSillon1")
let descsillon2 = document.getElementById("descSillon2")
let descsillon3 = document.getElementById("descSillon3")
let descsillon4 = document.getElementById("descSillon4")
let descsillon5 = document.getElementById("descSillon5")
let enter = document.getElementById("enter")
let carrito = document.getElementById("carro")

carrito.onclick = function() {
	window.location.assign('index.html')
}

polo.onclick = function() {

	txt.style.visibility = "visible";
}

polo.ondblclick = function() {

	txt.style.visibility = "hidden"
}


sillonUno.onclick = function() {

	descsillon1.style.visibility = "visible";
}

sillonDos.onclick = function() {

	descsillon2.style.visibility = "visible";
}

sillonTres.onclick = function() {

	descsillon3.style.visibility = "visible";
}

sillonCuatro.onclick = function() {

	descsillon4.style.visibility = "visible";
}

sillonCinco.onclick = function() {
	
	descsillon5.style.visibility = "visible";
}

let resultado = 1
let resultado2 = 1
let resultado3 = 1
let resultado4 = 1
let resultado5 = 1

function sumarAlCarrito() {

	resultado = resultado + 1
}

function restarAlCarrito() {

	resultado = resultado - 1
}

function sumarAlCarrito2() {

	resultado2 = resultado2 + 1
}

function restarAlCarrito2() {

	resultado2 = resultado2 - 1
}

function sumarAlCarrito3() {

	resultado3 = resultado3 + 1
}

function restarAlCarrito3() {

	resultado3 = resultado3 - 1
}

function sumarAlCarrito4() {

	resultado4 = resultado4 + 1
}

function restarAlCarrito4() {

	resultado4 = resultado4 - 1
}

function sumarAlCarrito5() {

	resultado5 = resultado5 + 1
}

function restarAlCarrito5() {

	resultado5 = resultado5 - 1
}


sumar.onclick = function() {

	document.getElementById("total").textContent = resultado;
	console.log(sumarAlCarrito())
}

restar.onclick = function() {

	if (resultado <= 0) {
		return
	}

	document.getElementById("total").textContent = resultado - 1;
	console.log(restarAlCarrito())
}

sumar2.onclick = function() {

	document.getElementById("total2").textContent = resultado2;
	console.log(sumarAlCarrito2())
}

restar2.onclick = function() {

	if (resultado2 <= 0) {
		return
	}

	document.getElementById("total2").textContent = resultado2 - 1;
	console.log(restarAlCarrito2())
}

sumar3.onclick = function() {

	document.getElementById("total3").textContent = resultado3;
	console.log(sumarAlCarrito3())
}

restar3.onclick = function() {

	if (resultado3 <= 0) {
		return
	}

	document.getElementById("total3").textContent = resultado3 - 1;
	console.log(restarAlCarrito3())
}

sumar4.onclick = function() {

	document.getElementById("total4").textContent = resultado4;
	console.log(sumarAlCarrito4())
}

restar4.onclick = function() {

	if (resultado4 <= 0) {
		return
	}

	document.getElementById("total4").textContent = resultado4 - 1;
	console.log(restarAlCarrito4())
}

sumar5.onclick = function() {

	document.getElementById("total5").textContent = resultado5;
	console.log(sumarAlCarrito5())
}

restar5.onclick = function() {

	if (resultado5 <= 0) {
		return
	}

	document.getElementById("total5").textContent = resultado5 - 1;
	console.log(restarAlCarrito5())
}

function guardarDatos() { 


let datos = []

if (localStorage.getItem('datos')) {
	datos = JSON.parse(localStorage.getItem('datos'))
}

datos.push(formulario)

localStorage.setItem('datos',JSON.stringify(datos))

}

function guardoCampo(campo) {
    if (campo.value.trim() !== '') {
        localStorage.setItem(campo.id, campo.value)
    }
}


function navegar(page) {
    location.href = page
}


function desplazarMe(titulo) {
	$('html, body').animate({
		scrollTop: $('#' + titulo).offset().top
	}, 2000);
}

$('#link2').click(function() {
	desplazarMe("Productos")
})

$('#link3').click(function() {
	desplazarMe("SobreMi")
})

$('#link4').click(function() {
	desplazarMe("Contacto")
})


let latitud = 0
let longitud = 0
let platform = ""
let tipoDeMapa = ""
let mapa = ""
const HEREMAPSAPIKEY = "OYMiNEtaPeoVcEgWqxD-CGZKEJ2dnOlY41RqorWBtxU"


function localizame() {
    navigator.geolocation.getCurrentPosition((position) => {
        latitud = position.coords.latitude
        longitud = position.coords.longitude
        document.getElementById("latlong").innerText = "Su posición: " + latitud + ", " + longitud
        console.log("Latitud: " + latitud + ", longitud: " + longitud)                
         platform = new H.service.Platform({"apikey": HEREMAPSAPIKEY});
         tipoDeMapa = platform.createDefaultLayers();
         mapa = new H.Map(
             document.getElementById("mapContainer"),
             tipoDeMapa.vector.normal.map,
                 {
                 zoom: 15,
                 center: {lng: longitud, lat: latitud}
                 }
         );
    })
}

$('#enter').on("keypress",function(e){
    if (e.keyCode == 13) { 
        alert('Completaste el formulario satisfactoriamente');
    }
});

enter.onclick = function() {
if ("onclick") {
	alert("Completaste el formulario satisfactoriamente")
}
}

$(document).ready(function() {

$("button").click(function(){

$.get("Proyetofinal.txt", function (data, status, xhr) {
	console.log("Mensaje: "+ data + "\nStatus: "+ status + " " + xhr);
});
});
});


