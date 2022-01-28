/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.replace(/  +/g, ' ');
    const words = s.trim().split(" ")
    
    // console.log(words)
    return words.reverse().reduce((a, b) => {
        return `${a} ${b}`
    }, "").trim()
    
    
    
};