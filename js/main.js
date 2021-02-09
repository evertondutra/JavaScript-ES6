/*
Formas normais de escrever funcões

function log(value){
    console.log(value);
}

log('test')


var sum = function(a, b){
    return a + b;
};
console.log(sum(10, 5));


// Arrow functions

=> caracteres obrigatórios
 Arrow Functions são funçoes anônimas que posem ser utilizadas ou
  atribuir a uma váriavel ou passando como parâmetro para outra função


var sum = (a, b) => a + b;
console.log(sum(4, 6));


var obj = {
    showContext: function showContext(){
        this.log("test");

        setTimeout(() => {
            this.log("after 1000ms");
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();



// Default function Arguments


function randomNumber(){
    console.log('Generation a random number...')
    num = Math.random() * 10;
    console.log('o número gerado é ', num);
    return num
}


function multiply(a=1, b= randomNumber()){
    return a * b
}

console.log( multiply(5));

console.log(multiply(5, 2));



// Objetos Literais

//maneira classica de se declarar
var prop1 = 'Digital Innovation One';

var obj = {
    prop1
};

console.log(obj);


const str = "Digital Innovation One";

function logarg(...rgs) {
    console.log(args)
}

logarg(...str);


// Modo normal
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Detructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple',
    'Banana',
    'Orange',
    ['Tomato']
];

console.log(tomato, tomato2);



// MOdo normal

var obj = {
    name: 'Celso',
    props: {
        age: 2,
        favoriteCollors: ['black', 'blue']
    }
};

var age = obj.props.age;

// Detructuring Assignment

var {name } = obj
var {
    props: {age: age2, favoriteCollors:[collor1, collor2]}
} = obj

console.log(collor1);


// Symbols

const uniqueId = Symbol('Helo');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);
*/
