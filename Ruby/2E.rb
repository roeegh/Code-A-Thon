# Input: The input cosists of a single string, consisting of characters and numbers, the string's length doesn't exceed 200 characters.
# Output: Return an integer by counting the total duplicate values

# Example: "abcde" => 0
# Example: "aabbcde" => 2
# Example: "aabBcde" => 2
# Example: "indivisibility" => 1
# Example: "Indivisibilities" => 2
# Example: "aA11" => 2
# Example: "ABBA" => 2

def duplicateCount (input)
    num = 0
	input = input.downcase
	chars = input.split('')
    
    chars.each do|c|
      num = input.scan(c).count
    	end
	return num
end