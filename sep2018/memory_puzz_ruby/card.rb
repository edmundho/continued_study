class Card

  attr_accessor :showing
  attr_reader :value

  def initialize(value)
    @value = value
    @showing = false
  end
  
  def hide
    @showing = false
  end
  
  def reveal
    @showing = true
  end

  def to_s
    value
  end

  def ==(val)
    value == val
  end
end