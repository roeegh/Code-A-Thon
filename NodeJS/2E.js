/* 
    Input: The input consists of a single string, consisting of characters and numbers, the string's length doesn't exceed 200 characters.
    Output: Return the string by masking all but the last 4 digits.
    
    Example maskify('4556364607935616') => '############5616'
    Example maskify('64607935616') => '#######5616'
    Example maskify('1') => '1'
    Example maskify('') => ''
*/

const maskify = (input) => {
    return input.replace(/.(?=.{4})/g, '#');
}