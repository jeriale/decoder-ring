// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let output = [];

    if (encode) {
      return encodeMessage(output, input, shift, alphabet);
    } else if (!encode) {
      return decodeMessage(output, input, shift, alphabet);
    }
  }

  function encodeMessage(output, input, shift, alphabet) {
    input.toLowerCase().split("").map((letter) => {
      if (letter.match(/[a-z]/i)) {
        alphabet.find((found, index) => {
          if (found === letter) {
            if (index + shift > 25) {
              output.push(alphabet[(index + shift) - 26])
            } else if (index + shift < 0) {
              output.push(alphabet[(index + shift) + 26])
            } else {
              output.push(alphabet[index + shift]);
            }
          }
        });
      } else {
        output.push(letter);
      }
    });
    return output.join("");
  }

  function decodeMessage(output, input, shift, alphabet) {
    shift *= -1;
    input.toLowerCase().split("").map((letter) => {
      if (letter.match(/[a-z]/i)) {
        alphabet.find((found, index) => {
          if (found === letter) {
            if (index + shift > 25) {
              output.push(alphabet[(index + shift) - 26])
            } else if (index + shift < 0) {
              output.push(alphabet[(index + shift) + 26])
            } else {
              output.push(alphabet[index + shift]);
            }
          }
        });
      } else {
        output.push(letter);
      }
      });
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
