/* A function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in reverse alphabetical order
 */
const reverse_alphabet = word => word.split('').sort().reverse().toString();

//Sample Input
const input = "supercalifragilisticexpialidocious";
console.log(`This is the reverse alphabet of ${input}: ${reverse_alphabet('supercalifragilisticexpialidocious')}`);