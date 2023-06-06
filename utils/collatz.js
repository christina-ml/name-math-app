function collatz(n, str = '', memoObj){
    console.log(memoObj)
    // if the number exists in memoObj
    if (memoObj[n]){
        console.log(`${n} is found in memoObj`)
        // return string + key at memoObj[number]
        return str + memoObj[n];
    }

    if (n === 1) return str + 1;
    
    if (n % 2 === 0){
      str += n + "->";
      n = n/2;
    } else {
      str += n + "->";
      n = (3 * n) + 1;
    }
    
    // call repeatedly until n is equal to 1
    return collatz(n, str, memoObj);
  }
module.exports = collatz;