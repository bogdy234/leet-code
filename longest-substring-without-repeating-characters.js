/**
 * @param {string} s
 * @return {number}
 */

/*
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    if (s === ''){
        return 0;
    }
    const lengths = [1];
    loop1:
    for (let i = 0; i < s.length; i++){
        loop2:
        for (let j = i; j < s.length; j++){
            if (map.get(s[j])){ 
                lengths.push(map.size);
                map.clear();
                continue loop1;
            }
            map.set(s[j], 1);
        }
    }
    return Math.max(...lengths);
};

console.log(lengthOfLongestSubstring("pwwkew"))