//Variables Globales
let categoria;
let questionsChoiceCategory;
let user;
let responseFalse = 0;
let responseTrue = 0;

//Aqui dentro de este Array vacio, se almacenan todas las preguntas que carga el usuario
const arrayQuestions = [];

//Array Random con las opciones de Juego
const arrayRandom = ['1', '2', '3'];

//QUESTIONS QUIz Geografia
const geoQuestion1="¿ Que país esta entre Perú y Bolivia ?";
const geoResponse1=2;
const geoQuestion2="¿ En que país se encuentra el pico Aconcagua ?";
const geoResponse2=3;
const geoQuestion3="¿ Qué río es el más caudaloso del Planeta ?";
const geoResponse3=1;
let intGeoQuestion1;
let intGeoQuestion2;
let intGeoQuestion3;

//QUESTIONS QUIz Cultura Popular
const cpQuestion1="Completa la frase: 'Mas vale pajaro en mano que ... ";
const cpResponse1=1;
const cpQuestion2="Completa la frase: 'Pajaro que comio ... ";
const cpResponse2=1;
const cpQuestion3="Completa la frase: 'La pelota no ... ";
const cpResponse3=1;
let intCpQuestion1;
let intCpQuestion2;
let intCpQuestion3;


//Clase de la estructura de incorporar Preguntas
class Questions{
    constructor(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue){
        this.question = question;
        this.choiceFalse = choiceFalse;
        this.choiceFalse1 = choiceFalse1;
        this.choiceFalse2 = choiceFalse2;
        this.answerTrue = answerTrue;
    }
}

const saludar = () =>{
    user = prompt(`============>  ¡Bienvenido a quiZplay!  <============\n\nPor favor ingresa tu nombre o apodo para poder ver el contenido\n `);
    while (user ==="" || user === null) {
        alert("No ingresaste nada\nPara poder ver el contenido necesitas identificarte");
        user = prompt("Ingresa tu nombre o apodo por favor");
    }
    return user;
}

const menuPrincipal = () => {
    categoria = (prompt(`Hola ${user} :)\nIngresa el numero correspondiente a la seccion que quieras visitar.\nAlgunas secciones se encuentran en construccion.\nSepan disculparnos, estamos trabajando en ellas.\n\n( 1 ) - Jugar a Preguntas\n( 2 ) - Jugar a Memorias\n( 3 ) - Jugar al Ahorcado\n( 4 ) - Colaborar subiendo tus preguntas\n( 5 ) - Elegir un juego al AZAR entre (Preguntas-Ahorcado-Memorias)\n( 6 ) - SALIR o CANCELAR\n `));
    switch (categoria) {
        case '1':
            playQuestions();
        case '2':
            playMemory();
        case '3':
            playHanged();
        case '4':
            playAddQuestions();
            break;
        case '5':
            choiceRandom();
            break;
        case '6':
            break;
        case null:
            break;
        default:
            alert("No existe esa categoria, elija nuevamente");
            return menuPrincipal();
    }
}
const playQuestions = () =>{
    questionsChoiceCategory = parseInt(prompt(`A jugar se ha dicho ${user}\nAntes de comenzar eleji el tema de las preguntas\n( 1 )-Geografia\n( 2 )-Cultura General`));
    while (isNaN(questionsChoiceCategory) || questionsChoiceCategory > 2) {
        alert("No existe esa categoria, elija nuevamente");
        questionsChoiceCategory = parseInt(prompt(`A jugar se ha dicho ${user}\nAntes de comenzar eleji el tema de las preguntas\n( 1 )-Geografia\n( 2 )-Cultura General`));
    }
    return questionsChoiceCategory, questions();
}

const questions = () =>{
    if (questionsChoiceCategory ==1) {
        alert("Elegiste GEOGRAFIA\nEMPEZEMOS!!!!!\nRecordá, tenes que ingresar el NUMERO correspondiente a la respuesta");
        intGeoQuestion1 = parseInt(prompt(geoQuestion1 + "\n\n1 - Buenos Aires\n2 - Ecuador\n3 - Brasil"));
            while (isNaN(intGeoQuestion1) || intGeoQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto / Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intGeoQuestion1 = parseInt(prompt(geoQuestion1 + "\n1 - Buenos Aires\n2 - Ecuador\n3 - Brasil"));
            }
        intGeoQuestion2 = parseInt(prompt(geoQuestion2 + "\n\n1 - Chile\n2 - Colombia\n3 - Argentina"));
            while (isNaN(intGeoQuestion2) || intGeoQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intGeoQuestion2 = parseInt(prompt(geoQuestion2 + "\n1 - Chile\n2 - Colombia\n3 - Argentina"));
            }
        intGeoQuestion3 = parseInt(prompt(geoQuestion3 + "\n\n1 - Río Amazonas\n2 - Río Nilo\n3 - Río Caudal Grande"));
            while (isNaN(intGeoQuestion3) || intGeoQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intGeoQuestion3 = parseInt(prompt(geoQuestion3 + "\n1 - Río Amazonas\n2 - Río Nilo\n3 - Río Caudal Grande"));
            }
            return intGeoQuestion1, intGeoQuestion2, intGeoQuestion3, score();
    }
    else if(questionsChoiceCategory ==2){
        alert("Elegiste CULTURA POPULAR\nEMPEZEMOS!!!!!!\nRecordá, tenes que ingresar el NUMERO correspondiente a la respuesta");
        intCpQuestion1 = parseInt(prompt(cpQuestion1 + "\n\n1 - ...cien volando'\n2 - ...alcon colgando'\n3 - ...gato atrapado'"));
            while (isNaN(intCpQuestion1) || intCpQuestion1 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intCpQuestion1 = parseInt(prompt(cpQuestion1 + "\n1 - ...cien volando'\n2 - ...alcon colgando'\n3 - ...gato atrapado'"));
            }
        intCpQuestion2 = parseInt(prompt(cpQuestion2 + "\n\n1 - ...voló'\n2 - ...se enamoro'\n3 - ...se fue corriendo'"));
            while (isNaN(intCpQuestion2) || intCpQuestion2 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intCpQuestion2 = parseInt(prompt(cpQuestion2 + "\n1 - ...voló'\n2 - ...se enamoro'\n3 - ...se fue corriendo'"));
            }
        intCpQuestion3 = parseInt(prompt(cpQuestion3 + "\n\n1 - ...se mancha'\n2 - ...reboto'\n3 - ...no es coca papi'"));
            while (isNaN(intCpQuestion3) || intCpQuestion3 > 3) {
                alert("Error!\nCaracter Incorrecto/Numero Inválido\nRecuerde ingresar solo el NUMERO que contiene la respuesta");
                intCpQuestion3 = parseInt(prompt(cpQuestion3 + "\n1 - ...se mancha'\n2 - ...reboto'\n3 - ...no es coca papi'"));
            }
            return intCpQuestion1,intCpQuestion2,intCpQuestion3, score();
    }
}

const playMemory = () =>{
    alert(`=========>  SECCION EN CONSTRUCCION  <=========\n\nJuegos de Memoria se encuentra en desarrollo, disculpe las molestias ${user}`);
    return menuPrincipal();
};

const playHanged = ()=>{
    alert(`=========>  SECCION EN CONSTRUCCION  <=========\n\nJuego de Ahorcado se encuentra en desarrollo, disculpe las molestias ${user}`);
    return menuPrincipal();
};

const playAddQuestions = () =>{
    do {
        listQuestions = prompt('Ingresa la pregunta para usar en nuestros QUIz o escribe "salir" para terminar','¿?');
        if ( listQuestions.toLowerCase() == "salir"){
            break;
        }else if ( listQuestions === "" || listQuestions === "¿?"){
            alert('ERROR!: Campo Vacio\nPor favor escriba la pregunta');
        }
        else{
                question = listQuestions;
            alert('Solo podes ingresar 3 respuestas Falsas y por ultimo la respuesta Correcta')
            let choiceFalse = prompt('Ingresa la primera respuesta Falsa');
            while (choiceFalse === "") {
                alert('ERROR!: Campo Vacio\nPor favor escriba la primer respuesta Falsa');
                choiceFalse = prompt('Ingresa la primera respuesta Falsa');
            }
            let choiceFalse1 = prompt('Ingresa la segunda respuesta Falsa');
            while (choiceFalse1 === "") {
                alert('ERROR!: Campo Vacio\nPor favor escriba la segunda respuesta Falsa');
                choiceFalse1 = prompt('Ingresa la segunda respuesta Falsa');
            }
            let choiceFalse2 = prompt('Ingresa la tercer respuesta Falsa');
            while (choiceFalse2 === "") {
                alert('ERROR!: Campo Vacio\nPor favor escriba la tercer respuesta Falsa');
                choiceFalse2 = prompt('Ingresa la tercer respuesta Falsa');
            }
            let answerTrue = prompt('Ingresa la respuesta CORRECTA');
            while (answerTrue === "") {
                alert('ERROR!: Campo Vacio\nPor favor escriba la respuesta CORRECTA');
                answerTrue = prompt('Ingresa la respuesta CORRECTA');
            }
            arrayQuestions.push(new Questions(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue));
        }
    } while (listQuestions.toLowerCase() == "salir");

    alert(`Gracias por cargar ${arrayQuestions.length} preguntas desafios, vamos a revisar el contenido y si cumple nuestras politicas seran utilizadas en nuestros QUIz\nA continuacion te dejamos el detalle de las preguntas enviadas.`);
    //Informacion de dia y horario en cual ingreso la informacion.
    document.write(`<center><h6>La informacion enviada quedo registrada el dia: ${new Date()}</h6></center>`);
    arrayQuestions.forEach((questions, indice) => {
        document.write(`<center><h4>Pregunta Nº: ${indice + 1} ==> ${questions.question}</h4><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse1}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse2}</h5></b><h5>Respuesta CORRECTA es: <b style='color:greenyellow'>${questions.answerTrue}</h5></b></center>`)
    ;});
}

const sumar = (a,b) =>{
    if (a == b) {
        responseTrue ++;
    }
    else{
        responseFalse ++;
    }
}

const score = () =>{
    if (questionsChoiceCategory ===1) {
        sumar(intGeoQuestion1,geoResponse1);
        sumar(intGeoQuestion2,geoResponse2);
        sumar(intGeoQuestion3,geoResponse3);   
    }
    else if (questionsChoiceCategory ===2) {
        sumar(intCpQuestion1,cpResponse1);
        sumar(intCpQuestion2,cpResponse2);
        sumar(intCpQuestion3,cpResponse3);
    }
    switch (responseTrue) {
        case 3:
            titulo="PERFECTO! ERES UNA ENCICLOPEDIA";
            break;
        case 2:
            titulo="BIEN, FALTO, PERO LO HICISTE MUY BIEN!";
            break;
        case 1:
            titulo="SEGUI PROGRAMANDO, LO TUYO NO SON LOS QUIz";
            break;
        default:
            titulo="TE FALTO ESTUDIO! NO HAS RESPONDIDO NINGUNA BIEN";
            break;
    }
    alert(`Listo ${user}, terminaste el QUIz!!!\nTu resultado:\nRespuestas Correctas: ${responseTrue}\nRespuestas Incorrectas: ${responseFalse}\nNivel:----> ${titulo} <----`);
    return choices();
}

const choices = () =>{
    choice = prompt(`${user}¿ Desea volver a jugar ?\nEscriba SI, si quiere volver a jugar\nPresione CANCELAR para salir del programa`);
    if (choice.toLowerCase() == "si") {
        return menuPrincipal();
    }else if(choice.toLowerCase() != ("si", null)){
        msj = alert(`${user} Por favor ingrese una opcion correcta!`);
        return choices();
    }
}

const choiceRandom = () => {
    let choice = Math.floor((Math.random()*arrayRandom.length)+1);
    if(choice == '1'){
        playQuestions();
        return menuPrincipal();
    }else if(choice == '2'){
        playMemory();
    }else if(choice == '3'){
        playHanged();
    }
}

const init = () =>{
    saludar();
    menuPrincipal();
}
init();
