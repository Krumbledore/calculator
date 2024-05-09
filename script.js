function operator(num1, op, num2){
    switch(op){
        case '+':
            add(num1, num2);
            break;
        case '-':
            console.log('subtraction')
    }
}

function add(num1, num2){
    sum = num1 + num2;
    console.log(sum)
}