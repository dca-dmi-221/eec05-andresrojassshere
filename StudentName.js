'use strict'

//PUNTO 1 
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
    console.log(word.split("").sort(function () {
        return Math.random() - 0.5
    }));
}
wordCutter(testWord);





//PUNTO 2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazon";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "SabrOsura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];
// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    // :)
    const myArray = Array.from(wordsList);
    let resultados = myArray.filter((myArray) => {
        return myArray.toUpperCase().startsWith(targetWord.toUpperCase());
    });
    console.log(resultados);

}
let targetA = wordSearcherIgnoreCase(testTargetWordA, testWordsList);
console.log(targetA);

let targetB = wordSearcherIgnoreCase(testTargetWordB, testWordsList);
console.log(targetB);

let targetC = wordSearcherIgnoreCase(testTargetWordC, testWordsList);
console.log(targetC);



//PUNTO 3
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    // :)
}





//PUNTO 4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {

    const wordReversed = word.split("").reverse().join("");
    return wordReversed === word ? "es palindromo" : "no es palindromo"
}
console.log(palindromeVerifier(onVerificationWordA.toLowerCase()));
console.log(palindromeVerifier(onVerificationWordB.toLowerCase()));
console.log(palindromeVerifier(onVerificationWordC.toLowerCase()));
console.log(palindromeVerifier(onVerificationWordD.toLowerCase()));





//PUNTO 5
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function consonantsCounter(objectContainer) {
    const count = objectContainer.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    return 'numero de consonantes: ' + count;

}

function vowelsCounter(objectContainer2) {
    const count = objectContainer2.match(/[aeiou]/gi).length;
    return 'numero de vocales: ' + count;
}

const cumbamba = "Cumbamba";
const oreja = "Oreja";
const nariz = "Nariz";
const ojo = "Ojo";
const lengua = "Lengua";
const diente = "Diente";

const cumbamba1 = consonantsCounter(cumbamba);
const cumbamba2 = vowelsCounter(cumbamba);
console.log(cumbamba1);
console.log(cumbamba2);

const oreja1 = consonantsCounter(oreja);
const oreja2 = vowelsCounter(oreja);
console.log(oreja1);
console.log(oreja2);

const nariz1 = consonantsCounter(nariz);
const nariz2 = vowelsCounter(nariz);
console.log(nariz1);
console.log(nariz2);

const ojo1 = consonantsCounter(ojo);
const ojo2 = vowelsCounter(ojo);
console.log(ojo1);
console.log(ojo2);

const lengua1 = consonantsCounter(lengua);
const lengua2 = vowelsCounter(lengua);
console.log(lengua1);
console.log(lengua2);

const diente1 = consonantsCounter(diente);
const diente2 = vowelsCounter(diente);
console.log(diente1);
console.log(diente2);





//PUNTO 6 
/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    listA = [wordArrayA]
    listB = [wordArrayB]

    const array3 = wordArrayA.concat(wordArrayB);

    console.log(array3);
}
arrayJoiner(wordArrayA);
arrayJoiner(wordArrayB);





//PUNTO 7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    // :)
}




//PUNTO 8
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)

}

console.log(vocalsRemoverFromObject(testObjMultiContainer));




//PUNTO 9
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {



    // :)

}






//PUNTO 10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}