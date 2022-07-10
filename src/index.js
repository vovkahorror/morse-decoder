const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let phrase = "";
  let letter;
  let symbol;
  for (let i = 0; i < expr.length; i += 10) {
    letter = "";
    symbol = expr.substr(i, 10);
    if (symbol.includes("*")) {
      phrase += " ";
      continue;
    } else {
      for (let j = symbol.length - 1; j >= 0; j -= 2) {
        if (symbol.endsWith("10")) {
          letter = "." + letter;
        } else if (symbol.endsWith("11")) {
          letter = "-" + letter;
        }
        symbol = symbol.slice(0, j - 1);
      }
    }
    phrase += MORSE_TABLE[letter];
  }
  return phrase;
}

module.exports = {
  decode,
};
