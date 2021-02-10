// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const square = [['a', 'f', 'l', 'q', 'v'], ['b', 'g', 'm', 'r', 'w'], ['c', 'h', 'n', 's', 'x'], ['d', 'i/j', 'o', 't', 'y'], ['e', 'k', 'p', 'u', 'z']];
    
    if (encode) {
      return encodeMessage(input, square);
    } else if (!encode) {
      return decodeMessage(input, square);
    }
  }

  function checkForValidInputLength(input) {
    return input.replace(/\s+/g, '').length % 2 == 0;
  }

  function encodeMessage(input, square) {
    let result = [];

    input.toLowerCase().split("").map((letter) => {
      if (letter === "i" || letter === "j") {
        result.push(4, 2);
      } else if (!letter.match(/[a-z]/i)) {
        result.push(letter);
      }

      for (let position1 in square) {
        for (let position2 in square[position1]) {
          if (letter === square[position1][position2]) {
            result.push(parseInt(position1) + 1, parseInt(position2) + 1);
          }
        }
      }
    });

    return result.join("");
  }

  function decodeMessage(input, square) {
    if (checkForValidInputLength(input)) {
      let result = [];
      let space = 0;
      const array = input.split("");

      for (i = 0; i < array.length - (space + 1); i += 2) {
        if (array[i + space] == 4 && array[i + 1 + space] == 2) {
          result.push("ij");
        } else if (!array[i + space].match(/[1-5]/i)) {
          result.push(array[i + space]);
          space--;
        } else {
          result.push(square[(array[i + space] - 1)][(array[i + space + 1] - 1)]);
        }
      }
      
      return result.join("");
    } else {
      return false;
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
