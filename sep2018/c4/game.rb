require_relative "board"
require_relative "player"

class Game

  attr_reader :board
  
  def initialize
    @board = Board.new
    @player1 = Player.new('Spike', "x")
    @player2 = Player.new('Jet', "o")
    @current_player = @player1
  end

  def run
    until board.game_over
      @current_player.play_piece(board)
      next_player!
      board.render
      sleep(1)
    end

    if board.draw
      puts "the game has ended in a draw"
    else
      winner = @current_player == @player1 ? @player2 : @player1
      puts "the game has been won by #{winner.name}"
    end
  end

  def next_player!
    @current_player = @current_player == @player1 ? @player2 : @player1
  end
end

if $PROGRAM_NAME == __FILE__
  game = Game.new
  game.run
end