# Class man
class GuessNumber
  attr_reader :number
  attr_reader :win

  def initialize
    Initializing.initializing
    @number = Random.rand(1..10)
    @win = false
  end

  def try_guess(number = 0)
    if number == @number
      @win = true
      'You win!'
    elsif number > @number
      'The typing number is very high!'
    else
      'The typing number is very low!'
    end
  end
end
