# Input: an integer
# Output: The number of closed paths in the integer

# Example: 649578 => 5
# Example: 1288 => 4

def closedPaths(num)
    hole = [ 1, 0, 0, 0, 1, 0, 1, 0, 2, 1 ]
    holes = 0
    
    num = num.to_i
    
    while num > 0 do
      d = num % 10
      holes += hole[d]
      num = (num/10).to_i
    end
    
    puts holes 
end

closedPaths(649578)
closedPaths(1288)