//tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

//Tipo Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;
console.log(pontoFlutuanteSemZero)

const novaOperacao = primeiroNumero/numeroPontoFlutuante;

console.log(novaOperacao)

//NaN -> Not A Number (não é número)
const bilac = "Bilac"
console.log(bilac*primeiroNumero);

// Infinity
var a = 10
var b = 0
console.log(a/b) 

// NaN
var a = 0
var b = 0
console.log(a/b) 


const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//Strings

const cidade = "belo horizonte";
const cidade2 = "Belo Horizonte";
console.log(cidade === cidade2); // false

const inputMinusculo = cidade2.toLowerCase();
console.log(cidade === cidade2); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


//Tipos nulos
let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined