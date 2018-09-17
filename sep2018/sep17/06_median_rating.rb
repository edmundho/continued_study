=begin

Calculate median rating of businesses

Thousands of bussinesses are listed and each business has a rating. Given the information for each business, calculate the median rating across all businesses.

Example: 
The input contains a business id and rating, separated by a space on each line.
Handling of input and output is already done, please complete the method to calculate the median rating.

Input: 
101 3.0
102 2.0
103 4.0
105 10.0
106 11.0
Output:
4.0

Input: 
103 3.0
110 1.0
102 2.0
105 10.0
Output:
2.5

=end

def median_rating(input)
  result = 0

  ratings = []

  input.each do |line|
    arr = line.split(' ')
    rating = arr[-1]
    ratings << rating.to_f
  end

  ratings = ratings.sort
  middle = ratings.length / 2
  median = nil
  
  if ratings.length % 2 == 0
    median = (ratings[middle] + ratings[middle - 1]) / 2
  else
    median = ratings[middle]
  end

  median
end

array = ['101 3.0', '102 2.0', '103 4.0', '105 10.0', '106 11.0']
array2 = ['103 3.0', '110 1.0', '102 2.0', '105 10.0']

p median_rating(array)
p median_rating(array2)