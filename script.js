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
    const result = num1 - num2;
    console.log(result)
}

function multiply(){
    const product = num1 * num2;
    console.log(product);
}

function divide(num1, num2){
    const result = num1 / num2;
    console.log(result);
}
