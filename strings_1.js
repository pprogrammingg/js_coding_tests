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
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  y: 1,
}

const pattern_match = (pattern, source) => {
  if (pattern.length > source.length || source.length < 1) {
    return 0
  }

  let window = ''
  let num_matches = 0,
    curr_index = 0

  return find_num_matches(pattern, source, window, curr_index, num_matches)
}

function find_num_matches(pattern, source, window, curr_index, num_matches) {
  if (window == '') {
    window = source.slice(curr_index, pattern.length)
  }

  console.log(`0. Window: ${window}`)

  let firstNonMatchingIndex = find_first_non_match_index(pattern, window)
  console.log(`1. firstNonMatchingIndex: ${firstNonMatchingIndex}`)

  if (firstNonMatchingIndex == -1) {
    console.log(`1a. pattern matches window, increment num_matches`)
    // pattern matches window, increment num_matches
    num_matches++

    // attempt slide window by 1 charcter if possible
    if (curr_index + window.length < source.length) {
      console.log(`1c. slide window by 1 charcter since we have room, curr_index ${curr_index}, curr_index + window.length ${curr_index + window.length}`)
      window = window.slice(1) + source.charAt(curr_index + window.length)
    } else {
      console.log(`1d. no more room to slide`)
      console.log(`2. return num_matches: ${num_matches}`)
      return num_matches
    }
  } else {
    // move the window past the non-matching character
    // first check if there are more characters if the window is moved
    console.log(`firstNonMatchingIndex + 1 + pattern.length < source.length ${firstNonMatchingIndex + 1 + pattern.length  < source.length}`)
    if (firstNonMatchingIndex + 1 + pattern.length  < source.length) {
      console.log(`1e. room to slide past non match index, curr_index ${curr_index}`)
      window = source.slice(firstNonMatchingIndex + 1, pattern.length)
      curr_index = firstNonMatchingIndex + 1;
    } else {
      console.log(`1f. no more room to slide after going past non match index`)
      console.log(`2 num_matches: ${num_matches}`)
      return num_matches
    }
  }

  return find_num_matches(pattern, source, window, curr_index, num_matches)
}

/**
 * Given
 * @param {string} pattern
 * @param {string} window
 * retrun -1 if pattern matches window as per criteria,
 * or return the index of the pattern where match did not occur
 */
const find_first_non_match_index = (pattern, window) => {
  let window_char
  let find_first_non_match_index = -1
  for (let i = 0; i < window.length; i++) {
    window_char = window[i]
    pattern_char = pattern[i]
    console.log(
      `find_first_non_match_index: p.ele ${pattern_char} w.ele ${window_char} index ${i}`,
    )
    if (
      !(
        (pattern_char == 0 && window_char in vowels) ||
        (pattern_char == 1 && !(window_char in vowels))
      )
    ) {
      find_first_non_match_index = i
      break
    }
  }

  return find_first_non_match_index
}

// Exporting the function to be used in other files
module.exports = {
  pattern_match,
}
