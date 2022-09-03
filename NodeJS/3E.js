/* 
    Input: The input consists of a single string, consisting of numbers.
    Output: Return a single digit
    
    Example: iqTest('2 4 7 8 10') => 3 // Third number is odd, while the rest of the numbers are even
    Example: iqTest('1 2 1 1') => 2 // Second number is even, while the rest of the numbers are odd
*/

const iqTest = (numbers) => {
    const odd = numbers.split(' ').filter(n => n % 2 === 1);
    const even = numbers.split(' ').filter(n => n % 2 === 0);
    return odd.length > even.length ? numbers.split(' ').indexOf(even[0]) + 1 : numbers.split(' ').indexOf(odd[0]) + 1;
}

console.log(iqTest('2 4 7 8 10'));
console.log(iqTest('1 2 1 1'));