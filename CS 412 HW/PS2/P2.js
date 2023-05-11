/*
 A generator that is initialized with a sentence and that emits each word of the sentence in
turn
 */
function* words(sentence){
    yield* sentence.split(' ');

}

//Example
let sentence = "All I know is something like a bird within her sang";
let gen = words(sentence);
let result = gen.next().value;
while(result !== undefined){
    console.log(result);
    result = gen.next().value;
}
