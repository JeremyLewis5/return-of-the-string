/*******************
 * YOUR CODE HERE! *
 *******************/

 function yell(str) {
      return str + "!";
 }

 
 //let result = 'Colin'[0];
 //result;
 //let soda = 'Coke';
 //let lastChar = soda[soda.length - 1];
 //lastChar;
 //let index = soda.indexOf('o');
 //index;
 
 function getFirstCharacter(str) {
        return str[0];
 }

 function getLastCharacter(last) {
        return last[last.length - 1];
 }
 
 function getOneCharacter(str, number1) {
        return  str[0];
 }//Need to review

 function getTwoCharacter(str, number2, number3) {
        return str[str.length - 1];
 }//Need to review

 function makeCapitalized(str) {
        return str.toUpperCase(str);
 }

 function yellLouder(str) {
        return str.toUpperCase(str) + '!!!';

 }

 function getInitials(string) {
        let str = str.indexOf([0])


 }//Need to review

 





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
