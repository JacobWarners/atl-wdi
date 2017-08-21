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

christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."

puts "#{christine} and I like #{likesTo}"

g = "2"
gToNumber = 2
puts g.to_i + gToNumber