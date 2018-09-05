=begin
discussion solution
void calc(vector<int> q)
{
    int ans = 0;
    for (int i = q.size() - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            cout << "Too chaotic" << endl;
            return;
        }
        for (int j = max(0, q[i] - 2); j < i; j++)
            if (q[j] > q[i]) ans++;
    }
    cout << ans << endl;
}

Input (stdin)
2
8
5 1 2 3 7 8 6 4
8
1 2 5 3 7 8 6 4
=end

def minimumBribes(q)
  num_bribes = 0

  i = q.length - 1
  while i >= 0
    if q[i] - (i + 1) > 2
      puts "Too chaotic"
      return
    end
    
    j = [0, q[i] - 2].max
    while j < i
      num_bribes += 1 if q[j] > q[i]
      
      j += 1
    end
    
    i -= 1
  end

  puts num_bribes
end