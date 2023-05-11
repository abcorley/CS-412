/*
A function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
 */
const apply_function = (input_string, decorator) => decorator(input_string);

let input = "supercalifragilisticexpialidocious";
/*
Example 1
Decorator function returns array containing fragments of input string broken on char 'c'
 */
console.log(`${apply_function(input,
        input => input.replaceAll(/c/g, '*c').split('*'))}`);
/*
Example 2
A lambda function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
contains the original string, the modified string, the total number of As in the modified string,
and the overall length of the modified string
 */
let output = apply_function(input,
    input => { return {
            originalString: input,
            modifiedString: input.replaceAll('a', 'A'),
            number_replaced: input.match(/a/g).length,
            length: input.length,
        } } )
console.log(output);
