class Stack {

    #data;
    
    constructor () {
      this.#data = [];
      this.size = this.#data.length;
    }  
  
      
    getMiddleEle () {
      if(!this.size){
        console.log('the stack is empty');
      }
      
      const midIndex = Math.floor(this.size/2);
      console.log(this.#data[midIndex])
    }
    
    getSecondFromBottom () {
      if(!this.#data[1]){
        console.log('there is only one item in the stack');
      }
      
      console.log(this.#data[1]);
    }
  
    // push () {
    //   for (const arg of arguments) {
    //     if (typeof arg === 'number') {
    //       this.#data.push(arg);
    //       this.size = this.#data.length;
    //       console.log('This is a number ', this.size);
    //     } else {
    //       console.log("Must push integers only");
    //     }
    //   }
    // }
  
    push (...nums) {
      const onlyIntegers = nums.filter(num => Number.isInteger(num));  
      this.#data.push(...onlyIntegers);
      this.size += onlyIntegers.length;
    }
  
    // add a pop method
    pop (num) {
      num = Math.min(num, this.size);
      this.size -= num;
      
      const poppedElements = [];
      
      for (let i = 0; i < num; i++) {
        const poppedElement = this.#data.pop();
        poppedElements.push(poppedElement);
      }
  
     
      
      return poppedElements;
    }
    
  }

module.exports = Stack;