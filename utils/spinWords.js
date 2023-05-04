// from code track (intermediate tab) - https://www.codewars.com/kata/5264d2b162488dc400000001/javascript
function spinWords(string) {
  // split string into words
  let words = string.split(' ');
    
  // iterate through words
  for (let i = 0; i < words.length; i++){
    // if length of word is five or more letters
    if (words[i].length >= 5){
      // reverse each character in the word
      words[i] = words[i].split('').reverse().join('');
    }
  }
  // join words back into a string
  return words.join(' ');
}

module.exports = spinWords;