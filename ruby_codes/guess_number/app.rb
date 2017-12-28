require_relative 'lib/guess_number'
require_relative 'lib/initializing'

game = GuessNumber.new

until game.win do
  puts "Type a number: "
  number = gets.to_i
  puts game.try_guess(number)
end
