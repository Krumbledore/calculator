

const CONTAINER = document.querySelector('.calc-body');

function addKeys(){
    let keypad = document.getElementsByClassName("keypad")[0];
    
    for(i = 0; i <= 9; i++){
        let key = Object.assign(document.createElement("div"), {id:i, textContent:i});
        keypad.append(key);
        console.log(key)

    }
}
addKeys()

function operator(num1, op, num2){
    switch(op){
        case '+':
            add(num1, num2);
            break;
        
        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;
            
        case '/':
            divide(num1, num2);
            break;
    }
}

function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum)
}

function subtract(num1, num2){
    const difference = num1 - num2;
    console.log(difference)
}

function multiply(num1, num2){
    const product = num1 * num2;
    console.log(product);
}

function divide(num1, num2){
    const quotient = num1 / num2;
    console.log(quotient);
}

CONTAINER.addEventListener('mousedown', (e) =>{
    let target = e.target;
    let button = document.getElementById(target.id);
    console.log(target.id)

    if(parseInt(target.id) != typeof("number")){
        console.log('ITSA NUMBA')
    }

});