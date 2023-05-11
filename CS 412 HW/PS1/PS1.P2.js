const operator = ([left, op, right]) => {
    switch(op){
        case '+':
            return ([left, op, right]) => parseInt(left) +parseInt(right);
            break;
        case '-':
            return ([left, op, right]) => parseInt(left) - parseInt(right);
            break;
        case '*':
            return ([left, op, right]) => parseInt(left) * parseInt(right);
            break;
        case '/':
            return ([left, op, right]) => parseInt(left) / parseInt(right);
            break;
        case '^':
            return ([left, op, right]) => parseInt(left)**parseInt(right);
            break;
    }
}

//Sample Inputs
let expression = '4+2';
console.log(`${expression} = ${operator(expression)(expression)}`);

expression = '5*7';
console.log(`${expression} = ${operator(expression)(expression)}`);

expression = '6-1';
console.log(`${expression} = ${operator(expression)(expression)}`);

expression = '9/2';
console.log(`${expression} = ${operator(expression)(expression)}`);

expression = '2^8';
console.log(`${expression} = ${operator(expression)(expression)}`);