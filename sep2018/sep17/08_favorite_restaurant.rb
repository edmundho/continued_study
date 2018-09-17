=begin

Favorite Restaurant

Choosing a lunch spot is always a pain, but luckily we have you to help out. Two friends, Darwin and Hammy, want to find a lunch spot and both of them have a list of favorite places ordered by decreasing preference. They agree that they will select the restaurant with the least combined rank in the 2 lists.

Example: 
Input: 
  restaurants_1: ['El Farolito', 'Japa Curry', 'Eatsa']
  restaurants_2: ['Japa Curry', 'Eatsa', 'Ayola', 'Working Girls']
Output: 
  'Japa Curry'. Because it has the least combined rank of 3
  (2 in restaurants_1 and 1 in restaurants_2).
The restaurant should be in both the lists to be selected.
The input provided will not have 2 restaurants with the same rank. So you don't have to factor that in.
Darwin and Hammy will eat a 'Yelpwich' if they can't reach a consensus.

Input: 
  restaurants_1: ['El Farolito', 'Japa Curry']
  restaurants_2: ['Ayola', 'Working GIrls']
Output: 
  'Yelpwich'

=end

def fav_rest(list1, list2)
  valid_choices = []
  combined_ranks = Hash.new(0)
  list1.each_with_index do |choice, index|
    combined_ranks[choice] = index + 1
  end

  # combine ranks if choice shows up in both lists
  # add to valid_choices array if choice shows up in both lists
  list2.each_with_index do |choice, index|
    if combined_ranks[choice] > 0
      combined_ranks[choice] += index + 1
      valid_choices << choice
    end
  end

  # iterate over valid_choices array while checking against combined_ranks
  # for least combined rank
  # returns 'Yelpwich' if valid_choices array is empty
  least_combined = Float::INFINITY
  winner = 'Yelpwich'
  
  valid_choices.each do |val_choice|
    if combined_ranks[val_choice] < least_combined
      least_combined = combined_ranks[val_choice]
      winner = val_choice
    end
  end

  winner
end

one = ['El Farolito', 'Japa Curry', 'Eatsa']
two = ['Japa Curry', 'Eatsa', 'Ayola', 'Working Girls']

three = ['El Farolito', 'Japa Curry']
four = ['Ayola', 'Working GIrls']

p fav_rest(one, two)
p fav_rest(three, four)