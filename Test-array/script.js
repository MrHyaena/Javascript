
      // Step 1: If the element is an even number
  
        // Step 2: Multiply this number by three

        // Step 3: Add the new number to the total

  let sum = 0;
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const evenNums = arr.filter(isEven);

  function multiply(num) {
    return num * 3;
  }

  const multipliedNum = evenNums.map(multiply);

  const outputEvenNums = multipliedNum.reduce((total, currentItem) => {
    return total * currentItem
  }, 1);

  console.log(outputEvenNums);