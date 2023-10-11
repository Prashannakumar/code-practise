// Find all substring which have consecutive vovels (a e i o u) from the given string 

// Example:

// heelleoa --> ['ee', 'eoa']

// airoplane --> ['ai']

// helleo --> ['eo']

// heelleo --> ['ee', 'eo']


function findConsecutiveVowels(input) {
  const vowels = 'aeiouAEIOU';
  const result = [];

  let currentSubstring = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (vowels.includes(char)) {
      currentSubstring += char;
    } else {
      if (currentSubstring.length > 0) {
        result.push(currentSubstring);
      }
      currentSubstring = '';
    }
  }

  if (currentSubstring.length > 0) {console.log(currentSubstring)
    result.push(currentSubstring);
  }

  return result;
}

const inputString = 'heelloea';
const consecutiveVowels = findConsecutiveVowels(inputString);
console.log(consecutiveVowels);
