class Board
  def initialize
    @board = Array.new(7) { Array.new() }
  end

  def play_piece(column, mark)
    @board[column] << mark
  end

  def column_full(column)
    @board[column].length >= 6
  end

  def game_over
    vertical_win || horizontal_win || draw
  end

  def draw
    @board.all? { |column| column.length == 6 }
  end

  def vertical_win
    @board.each_with_index do |column, col_num|
      if column.length > 3
        i = 0
        while i < 3
          section = column[i..i + 3]
          if section.length > 3
            x_wins = section.all? { |space| space == "x" }
            o_wins = section.all? { |space| space == "o" }
  
            if x_wins || o_wins
              return true
            end
          end
          
          i += 1
        end
      end
    end
    return nil
  end

  def horizontal_win
    6.times do |i|

      j = 0
      while j < 4
        potential = [
          @board[j][i], 
          @board[j + 1][i], 
          @board[j + 2][i], 
          @board[j + 3][i]
        ]

        has_nil = potential.any? { |space| space.nil? }
        x_wins = potential.all? { |space| space == "x" }
        o_wins = potential.all? { |space| space == "o" }

        if has_nil
          j += 1
          next
        elsif x_wins || o_wins
          return true
        end
        
        j += 1
      end
      
    end
    return nil
  end
  
  def size
    @board.size
  end
  
  def render
    puts "-----"
    @board.each do |column|
      p column
    end
    puts "-----"
  end
end

if $PROGRAM_NAME == __FILE__
  u = Board.new
  # u.render
  u.play_piece(0, "y")
  u.play_piece(0, "r")
  u.play_piece(0, "r")
  u.play_piece(0, "r")
  u.play_piece(0, "r")
  u.play_piece(1, "r")
  u.play_piece(1, "r")
  u.play_piece(1, "y")
  u.play_piece(1, "r")
  u.play_piece(2, "y")
  u.play_piece(6, "r")
  u.play_piece(3, "r")
  u.play_piece(4, "r")
  u.play_piece(5, "r")
  # u.play_piece(6, "r")
  u.play_piece(3, "r")
  u.play_piece(3, "y")
  u.play_piece(3, "y")
  u.render
  p u.horizontal_win
end