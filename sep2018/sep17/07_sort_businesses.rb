=begin

Sort businesses by their ratings (high to low)

There is an option of sorting businesses by their rating (high to low). Given list of business ids and their ratings, sort them in the order of their rating (high to low).
** If two businesses have same rating, the result should preserve the original ordering. **
The business ratings are always positive integers in the range of 1 to 5.

Input Format
Each line contains business_id and rating of the business separated by a space. Handling of input and output is already done. Complete the function.

Output Format
Each line in the output should have business_id and rating separated by a space, with list of businesses sorted by their rating in the order of high to low. Preserve the original order if two businesses have same ratings.

Constraints

Sample Input: 
1000 2
1005 5
1001 5
999 1

Sample Output:
1005 5
1001 5
1000 2
999 1

=end

def sort_biz(input)
  sorted = input.sort do |a, b|
    rating_a = a.split(' ').last.to_i
    rating_b = b.split(' ').last.to_i
    rating_b <=> rating_a
  end
  
  sorted
end

array = ["1000 2", "1005 5", "1001 5", "999 1"]

p sort_biz(array) # => ["1005 5", "1001 5", "1000 2", "999 1"]