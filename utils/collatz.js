function collatz(n, str = ''){
  if(n === 1) return str + '1';
  
  str += n + '->';
  
  n = n % 2 === 0 ? n / 2: n*3 + 1;
  
  return collatz(n, str);
}
module.exports = collatz;