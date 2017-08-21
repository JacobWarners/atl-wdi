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

# puts "What is your name?"
# name = gets.chomp
# puts "What do you like to do?"
# activity = gets.chomp
# puts "Your name is #{name} and you like to #{activity}"

myFirstArray = []
myFirstArray = ["one", "two", "three", "four", "five", 6, 7, 8, 9]
puts myFirstArray[myFirstArray.length-1]
puts myFirstArray[0]
myFirstArray[1] = "Joe"
myFirstArray[2] = 3
myFirstArray << "true"
puts myFirstArray[3].class

myFavoriteAnimals = {
    edgar: "donkey",
    liam: "cat",
    greg: "zebra",
    charles: "cheeta",
    sally: "seal",
}

myFavoriteAnimals[:edgar] = "Bear"
favoriteMovie = {}
favoriteMovie[:movie] = "emporers new groove"


