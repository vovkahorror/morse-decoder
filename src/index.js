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
  let morse = "";
  let str;
  let substr;
  for (let i = 0; i < expr.length; i += 10) {
    str = "";
    substr = expr.substr(i, 10);
    if (substr.includes("*")) {
      morse += " ";
      continue;
    } else {
      for (let j = substr.length - 1; j >= 0; j -= 2) {
        if (substr.endsWith("10")) {
          str = "." + str;
        } else if (substr.endsWith("11")) {
          str = "-" + str;
        }
        substr = substr.slice(0, j - 1);
      }
    }
    morse += MORSE_TABLE[str];
  }
  return morse;
}

module.exports = {
  decode,
};
