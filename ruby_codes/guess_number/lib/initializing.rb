require 'tty_cursor'

class Initializing
  def self.initializing
    system('clear')

    cursor = TTY::Cursor
    print cursor.move_to(15, 20)

    print "Initializing."
    4.times do |i|
      sleep 1
      print "."
    end
    puts "."
    system('clear')
  end
end

