function RESUMEN () { 
let RTablaB1 = document.getElementById ("RTablaB1");
RTablaB1.innerHTML = "";

let RBloque1A = document.querySelector('input[name="RBloque1A"]:checked');
let RBloque1B = document.querySelector('input[name="RBloque1B"]:checked');
let RBloque1C = document.querySelector('input[name="RBloque1C"]:checked');
let RBloque1D = document.querySelector('input[name="RBloque1D"]:checked');
let RBloque1E = document.querySelector('input[name="RBloque1E"]:checked');
let RBloque1F = document.querySelector('input[name="RBloque1F"]:checked');
/*Si la respuesta tiene valor que se sume a ResultadoB1*/
let ResultadoB1 = 0;
if (RBloque1A) {
    ResultadoB1 += parseInt(RBloque1A.value);}
if (RBloque1B) {
    ResultadoB1 += parseInt(RBloque1B.value);}
if (RBloque1C) {
    ResultadoB1 += parseInt(RBloque1C.value);}
if (RBloque1D) {
    ResultadoB1 += parseInt(RBloque1D.value);}
if (RBloque1E) {
    ResultadoB1 += parseInt(RBloque1E.value);}
if (RBloque1F) {
ResultadoB1 += parseInt(RBloque1F.value);}
/* Fila donde se va a mostrar el titulo */
let FilaTituloB1 = RTablaB1.insertRow();
let CeldaFTB1 = FilaTituloB1.insertCell(0);
CeldaFTB1.colSpan = 2;
CeldaFTB1.innerHTML = "BLOQUE 1 Resumen ejecutivo de la empresa";

let TotalFilaB1 = RTablaB1.insertRow();
let CeldaTotalB1 = TotalFilaB1.insertCell(0);
CeldaTotalB1.innerHTML = "Total:";
let ValorCeldaB1 = TotalFilaB1.insertCell(1);
ValorCeldaB1.innerHTML = ResultadoB1;


/* -----Tabla del bloque 2-----*/
let RTablaB2 = document.getElementById("RTablaB2")
RTablaB2.innerHTML = "";

let RBloque2A = document.querySelector('input[name="RBloque2A"]:checked');
let RBloque2B = document.querySelector('input[name="RBloque2B"]:checked');
let RBloque2C = document.querySelector('input[name="RBloque2C"]:checked');

let ResultadoB2 = 0;
if (RBloque2A) {
    ResultadoB2 += parseInt(RBloque2A.value);}
if (RBloque2B) {
    ResultadoB2 += parseInt(RBloque2B.value);}
if (RBloque2C) {
    ResultadoB2 += parseInt(RBloque2C.value);}

let FilaTituloB2 = RTablaB2.insertRow();
let CeldaFTB2 = FilaTituloB2.insertCell(0);
CeldaFTB2.colSpan = 2;
CeldaFTB2.innerHTML = "BLOQUE 2 Historia y situación actua";


let TotalFilaB2 = RTablaB2.insertRow();
let CeldaTotalB2 = TotalFilaB2.insertCell(0);
CeldaTotalB2.innerHTML = "Total:";
let ValorCeldaB2 = TotalFilaB2.insertCell(1);
ValorCeldaB2.innerHTML = ResultadoB2;

/* -----Tabla del bloque 3----- */
/* Este es el apartado Bloque3A el resultado se guarda en BResultado3A*/
let RBloque3A = document.getElementsByName("RBloque3A");
let BResultado3A = 0;
let Ropciones4  = document.getElementById("Ropciones4");

for (let i = 0; i < RBloque3A.length; i++){
if (RBloque3A[i].checked){
    if (Ropciones4.checked){
    BResultado3A = 0;
    break;
    } else {BResultado3A += parseInt(RBloque3A[i].value);}
}}

let RTablaB3 = document.getElementById ("RTablaB3")
RTablaB3.innerHTML = "";

let RBloque3B = document.querySelector('input[name="RBloque3B"]:checked');
let RBloque3C = document.querySelector('input[name="RBloque3C"]:checked');
let RBloque3D = document.querySelector('input[name="RBloque3D"]:checked');
let RBloque3E = document.querySelector('input[name="RBloque3E"]:checked');

let ResultadoB3 = 0;
if (RBloque3B) {
    ResultadoB3 += parseInt(RBloque3B.value);}
if (RBloque3C) {
    ResultadoB3 += parseInt(RBloque3C.value);}
if (RBloque3D) {
    ResultadoB3 += parseInt(RBloque3D.value);}
if (RBloque3E) {
    ResultadoB3 += parseInt(RBloque3E.value);}
/* Fila titulo */
let FilaTituloB3 = RTablaB3.insertRow();
let CeldaFTB3 = FilaTituloB3.insertCell(0);
CeldaFTB3.colSpan = 2;
CeldaFTB3.innerHTML = "BLOQUE 3 Situación estratégica y acceso a tecnología";

let TotalFilaB3 = RTablaB3.insertRow();
let CeldaTotalB3 = TotalFilaB3.insertCell(0);
CeldaTotalB3.innerHTML = "Total:";
let ValorCeldaB3 = TotalFilaB3.insertCell(1);
ValorCeldaB3.innerHTML = ResultadoB3+BResultado3A;

/* -----Tabla del bloque 4----- */
let RTablaB4 = document.getElementById ("RTablaB4")
RTablaB4.innerHTML = "";

let RBloque4A = document.querySelector('input[name="RBloque4A"]:checked');
let RBloque4B = document.querySelector('input[name="RBloque4B"]:checked');
let RBloque4C = document.querySelector('input[name="RBloque4C"]:checked');

let ResultadoB4 = 0;
if (RBloque4A) {
    ResultadoB4 += parseInt(RBloque4A.value);}
if (RBloque4B) {
    ResultadoB4 += parseInt(RBloque4B.value);}
if (RBloque4C) {
    ResultadoB4 += parseInt(RBloque4C.value);}

let FilaTituloB4 = RTablaB4.insertRow();
let CeldaFTB4 = FilaTituloB4.insertCell(0);
CeldaFTB4.colSpan = 2;
CeldaFTB4.innerHTML = "BLOQUE 4 Identificación de procesos";

let TotalFilaB4 = RTablaB4.insertRow();
let CeldaTotalB4 = TotalFilaB4.insertCell(0);
CeldaTotalB4.innerHTML = "Total:";
let ValorCeldaB4 = TotalFilaB4.insertCell(1);
ValorCeldaB4.innerHTML = ResultadoB4;

let Email = document.getElementById ("emailInput").value;
let Nombre = document.getElementById ("nombreInput").value;
let Apellido = document.getElementById ("apellidoInput").value;
let Empresa = document.getElementById ("empresaInput").value;
let Telefono = document.getElementById ("telefonoInput").value;
let Giro = document.getElementById ("giroInput").value;

let RTablaDatos = document.getElementById ("RTablaDatos");
RTablaDatos.innerHTML = "";
AñadirFilaTabla("Email", Email);
AñadirFilaTabla("Nombre", Nombre);
AñadirFilaTabla("Apellido", Apellido);
AñadirFilaTabla("Empresa", Empresa);
AñadirFilaTabla("Telefono", Telefono);
AñadirFilaTabla("Giro", Giro);
}
function AñadirFilaTabla (dato, valor) {
let RTablaDatos = document.getElementById ("RTablaDatos");
let FilaDato = RTablaDatos.insertRow();
let CeldaDato = FilaDato.insertCell(0);
let CeldaValor = FilaDato.insertCell(1);

CeldaDato.textContent = dato;
CeldaValor.textContent = valor;
}