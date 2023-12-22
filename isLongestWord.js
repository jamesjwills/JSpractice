//could have used .match to search the string for specific pattern.

function LongestWord(sen) {

  // code goes here  
  function isLetter(character) {
    return character.match(/[a-zA-Z]/) !== null;
}

let wordArray = [];
let j = 0;
while (j < sen.length) {
    while (j < sen.length && !isLetter(sen[j])) {
        j++
    }
    let i = j;
    while (i < sen.length && isLetter(sen[i])) {
        i++;
    }

    if (j !== i) {
        wordArray.push(sen.slice(j, i));
    }
    
    j = i;
    
}

wordLengthArray = [];
for (const el of wordArray) {
  wordLengthArray.push(el.length);
}

//console.log(wordLengthArray);

wordLengthArray.sort((a, b) => a - b);
//console.log(wordLengthArray);
const maxLength = wordLengthArray[wordLengthArray.length - 1];

//console.log(maxLength);

for (const word of wordArray) {
  if (word.length === maxLength) {
    return word;
  }
}

}

// keep this function call here 
console.log(LongestWord("I love dogs"));
//LongestWord("qwer f qwef love dogs");