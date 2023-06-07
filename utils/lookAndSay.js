// function sayWhatYouSeeDigits (digits){
//     let digitsAsSeen = '';
//     let pointer = 0;
  
//     for(let i = 1; i<= digits.length; i++){
//       if(digits[i] !== digits[pointer]){
//         let currDigits = digits.slice(pointer, i);
//         digitsAsSeen += currDigits.length + currDigits[0];
//         pointer = i;
//       }
//     }
  
//     return digitsAsSeen;
//   }
  
//   function lookAndSay(data,len, allNums = []){
  
//     if(len == 0) return allNums
    
//     len--;
//     let dataAsSaid = sayWhatYouSeeDigits(data);
//     allNums.push(dataAsSaid)
    
//     return lookAndSay(dataAsSaid, len, allNums)
//   }


function lookAndSay(data, len){
  return Array.from(
     { length: len },
     (el, i) => (data = data.replace(/(.)\1*/g, r => r.length + r[0]))
   );
 }
module.exports = lookAndSay;

// function sayandsee(str){
//     // count of the digits
//     // add count to the digit
//     // change str to number
//     // let stringToNum = Number(str);
    
//     let count = 0;

//     // if characters are the same
//     for (let char in str){
//         console.log()
//         if (str[char] !== str[char + 1]){
//             count++
//         }
//     }
    
//     return count + '' + str;
// }
// console.log(sayandsee('555')); // 35

// module.exports = sayandsee;