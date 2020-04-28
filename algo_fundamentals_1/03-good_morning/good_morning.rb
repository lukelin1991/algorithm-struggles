# create a function.  Within it, print the string "good morning!".
# call it 123 times.

def gmornin
    i = 1
    proc = Proc.new{puts "good morning!"}
    123.times do
        puts i
        proc.call
        i += 1
    end
end

gmornin