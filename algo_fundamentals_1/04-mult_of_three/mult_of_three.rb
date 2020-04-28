# using a loop, print multiples of 3 from -300 to 0.
# skip -3 and -6.
i = 0

while i >= -300 do
    if (i != -3 && i != -6) && (i % 3 == 0)
        puts i
    end
    i -= 1
end