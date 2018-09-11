class Player

  attr_reader :name
  def initialize(name, piece)
    @name = name
    @piece = piece
  end

  def play_piece(board)
    random_column = nil

    until random_column
      random_column = rand(board.size)
      if board.column_full(random_column)
        random_column = nil
      end
    end

    board.play_piece(random_column, @piece)
  end

end