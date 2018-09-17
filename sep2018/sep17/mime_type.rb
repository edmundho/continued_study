@n = gets.to_i # Number of elements which make up the association table.
@q = gets.to_i # Number Q of file names to be analyzed.

table = {}

@n.times do
    # ext: file extension
    # mt: MIME type.
    ext, mt = gets.split(" ")
    table[ext.downcase] = mt # store lowercase version of extension only
end

@q.times do
    fname = gets.chomp # One file name per line.
    
    if !fname.include?('.') || fname[-1] == "." # fnames that don't have '.' or end in '.' are invalid
        puts "UNKNOWN"
    else
        # after splitting fname by '.', last element is the extension
        # remember to account for case-insensitivity
        extension = fname.split('.')[-1].downcase
        if table[extension]
            puts table[extension]
        else # if table doesn't have this key, print 'UNKNOWN'
            puts "UNKNOWN"
        end
    end
end