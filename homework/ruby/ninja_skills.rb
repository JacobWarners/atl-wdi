a = true;
b = false;
if a && b
    puts true
else
    puts false
end

if a || b
    puts true
else
    puts false
end

nilvar = nil
puts nilvar
puts "#{nilvar} was here"
print nilvar
puts nilvar.class

d = 42
puts d
e = 42.0
puts e
d = e
puts d