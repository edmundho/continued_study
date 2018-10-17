var isAnagram = function(s, t) {
    const firstSorted = s.split('').sort().join();
    const secondSorted = t.split('').sort().join();
    
    return firstSorted === secondSorted;
};