/*
A generator that returns the series of fibonacci numbers starting from 0
 */
function* fib() {
    yield 0;
    yield 1;
    let [val1, val2, result] = [0,1,0];
    while(true) {
        result = val1+val2;
        [val1, val2] = [val2, result];
        yield result;
    }
}

/*
A generator that uses fib() generator to obtain the next number in the Fibonacci sequence, it rejects
it if it is odd and asking for the next one, and if it is even it is returned.
 */
function* evenFibs() {
    let fibs = fib();
    while(true) {
        let result = fibs.next().value;
        if(result%2 === 0) {
            yield result;
        } else {
           result = fibs.next()
        }
    }
}

//Example: Prints out the first 6 even Fibonacci numbers.
const generator = evenFibs();
let count = 6;
while(count --> 0){
    console.log(generator.next().value)
}