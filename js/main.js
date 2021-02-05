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

*/

// Default function Arguments

function multiply(a=1, b=1){
    return a * b
}

console.log(multiply(2));

