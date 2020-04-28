# Set myNumber to 86.  Set myName to your name.
# now swap myNumber into myName & vice versa.

puts myNumber = 86
puts myName = "Lei"

def swap(name, number)
    init_name = name
    init_num = number.to_s

    puts myName = "my name is: " + init_num
    puts myNumber = "my number is:" + init_name
end

swap(myName, myNumber)