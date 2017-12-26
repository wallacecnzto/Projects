class GuessNumber
  attr_reader :number
  attr_reader :win

  def initialize
    @number = Random.rand(1..10)
    @win = false
  end

  def try_guess(number = 0)
    if number == @number
      @win = true
      return "You win!"
    elsif number > @number
      return "The typing number is very high!"
    else
      return "The typing number is very low!"
    end
  end
end

game = GuessNumber.new

until game.win do
  puts "Type a number: "
  number = gets.to_i
  puts game.try_guess(number)
end
