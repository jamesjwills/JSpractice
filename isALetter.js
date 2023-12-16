//returns true if character is a letter, false otherwise.

function isLetter(char) {

	return char.toUpperCase() != char.toLowerCase();
};

//console.log(isLetter('!'));
//console.log(isLetter('a'));

//returns true if character is underscore, false otherwise.

function isUnderScore(char) {
    return char == '_';
  }



//returns true if character is number, false otherwise.

function isNumber(char) {
return Number.isInteger(Number(char));

};

//console.log(isNumber('3'));
//console.log(isNumber('s'));


  //returns false if string contains forbidden characters, i.e. any character which is not a number, underscore, or letter.
  function containsForbiddenCharacter(string) {
    for (let i = 0; i < string.length; i++) {
  	  if (!isNumber(string.charAt(i)) && !isUnderScore(string.charAt(i)) && !isLetter(string.charAt(i))) {
      return false;
      };
	  };
	return true;
  };

console.log(containsForbiddenCharacter('f_2'));