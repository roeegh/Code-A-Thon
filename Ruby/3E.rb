# Input: The input cosists of a single string, consisting of characters and numbers, the string's length doesn't exceed 200 characters.
# Output: Return the input string, but with all characters replaces with their respective positions in the alphabet.

# Example: "The sunset sets at twelve o' clock." => 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

def alphabetPosition (input)
    output = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    input = input.downcase
    chars = input.split('')
    chars.each do |c|
        if alphabet.include? c
            output = output + (alphabet.index(c) + 1).to_s + " "
        end
    end

    return output
end