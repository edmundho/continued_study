=begin

Merge Sorted Businesses

There are two lists of businesses obtained from two diff services named "Trendy Businesses" and "Favorite Businesses". Each list is sorted by their number of reviews in descending order. We would like to build a tool, that obtains both the lists and aggregates them displaying all businesses in sorted order based on number of reviews.

Note:
There are no duplicates, meaning there would not be any business that appear on both "Trendy Businesses" and "Favorite Businesses".

Input Format:
Handling of input and output is already done. Please complete the necessary functions

The first line has two numbers N, M containing number of items in two lists.
The next set of lines from 1, N+1 are rows belonging to the first list. Each line contains business id and number of reviews separated by a space.
The next set of lines from N+1, N+1+M belongs to second list. Each line contains business id and number of reviews separated by space.

Example:
Input:
2 3
100 1000
103 900
203 950
201 800
202 700

Output:
100 1000
203 950
103 900
201 800
202 700

=end

def merge_biz(list1, list2)
  merged = list1 + list2

  sorted = merged.sort do |a, b|
    reviews_a = a.split(' ').last.to_i
    reviews_b = b.split(' ').last.to_i
    if reviews_a > reviews_b
      -1
    elsif reviews_a == reviews_b
      0
    elsif reviews_a < reviews_b
      1
    end
  end

  sorted
end

one = ['100 1000', '103 900']
two = ['203 950', '201 800', '202 700']

p merge_biz(one, two) # => ['100 1000', '203 950', '103 900', '201 800', '202 700']
