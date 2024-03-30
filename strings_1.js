/*
You are given two strings: pattern and source. The first string pattern contains 
only the symbols 0 and 1, and the second string source contains only lowercase English letters.

Your task is to calculate the number of substrings of source that match pattern. 

We’ll say that a substring source[l..r] matches pattern if the following three conditions are met:
– The pattern and substring are equal in length.
– Where there is a 0 in the pattern, there is a vowel in the substring. 
– Where there is a 1 in the pattern, there is a consonant in the substring. 

Vowels are ‘a‘, ‘e‘, ‘i‘, ‘o‘, ‘u‘, and ‘y‘. All other letters are consonants.
*/

const vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'y': 1
  };
  

const pattern_match = (pattern, source) => {
  if (pattern.length > source.length || source.length < 1 ) {
    return 0
  }

  let window = "";
  let num_matches = 0;

  return find_num_matches(pattern, source, window, num_matches);
}

function find_num_matches(pattern, source, window, num_matches){

    if (window == ""){
        window = source.slice(0, pattern.length);
    }

    console.log(`0. Window: ${window}`);
    
    let firstNonMatchingIndex = find_first_non_match_index(pattern, window);
    console.log(`1. firstNonMatchingIndex: ${firstNonMatchingIndex}`);

    if (firstNonMatchingIndex  == -1) {
        // pattern matches window, increment num_matches
        num_matches++;
        // slide window by 1 charcter if there are more characters
        if (i + 1 < s.length){
            window = window.slice(1) + s[i+1];
        }
        else {
            // no more characters
            console.log(`1.a. num_matches: ${num_matches}`);
            return num_matches;
        }

    }
    else {
        // move the window past the non-matching character
        // first check if there are more characters if the window is moved
        if (i + firstNonMatchingIndex < s.length){
            window = source.slice(i + firstNonMatchingIndex, patternLength);
        }
        else {
            console.log(`1.b. num_matches: ${num_matches}`);
            return num_matches;
        }
    }

    return find_num_matches(pattern, source, window, num_matches);
  }

/**
 * Given
 * @param {string} pattern 
 * @param {string} window 
 * retrun -1 if pattern matches window as per criteria, 
 * or return the index of the pattern where match did not occur
 */
const find_first_non_match_index = (pattern, window) => {
  let window_char;
  Array.from(pattern).forEach((ele, i) => {
    window_char = window[i];
    if ((ele == 0 && window_char in vowels) || (ele == 1 && !(window_char in vowels) )){
        return -1;
    }
    else {
        return i;
    }
  }); 
}

// Exporting the function to be used in other files
module.exports = {
  pattern_match,
}
