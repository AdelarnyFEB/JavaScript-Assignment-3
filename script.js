 function countOccurrences(array) {
    // We use the reduce method to create an object with key-value pairs
    const result = array.reduce((key, number) => {
      // If the number is not a key in the accumulator object, initialize it with a value of 1
      if (!key[number]) {
        key[number] = 1;
      } else {
        // If the number is already a key, increment its value by 1
        key[number]++;
      }
      return key;
    }, {});
  
    return result;
  }
  
  // Example usage:
  const numbers = [1,2,2,3,3,4,4,5,5,5];
  const result = countOccurrences(numbers);
  console.log(result);
  
