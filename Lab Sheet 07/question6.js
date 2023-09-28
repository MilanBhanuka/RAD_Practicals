function reverse(str) {
    const strList = str.split('');
    const reverseList = strList.reverse();
    const reverseStr = reverseList.join('');
    return reverseStr;
  }
  
const str = process.argv[2];
const reversedString = reverse(str);
console.log('Reversed String:', reversedString);
  