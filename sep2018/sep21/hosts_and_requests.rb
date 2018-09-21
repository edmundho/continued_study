# read the string filename
filename = gets.strip

# read file lines to lines array
lines = File.readlines(filename)

# initialize hash to count num of requests by hostname
results = Hash.new(0)

lines.each do |line|
  # split each line by a space
  # we only care about hostname which will always be in front of the first space
  split = line.split(' ')
  hostname = split[0]
  
  # increment hash key by 1 for each hostname
  results[hostname] += 1
end

# open a file with new filename in 'write' mode
# iterate through results hash and write to file hostname and num requests
new_file = File.open("records_" + filename, "w") do |file|
  results.each do |host, requests|
    file.puts "#{host} #{requests}"
  end
end

