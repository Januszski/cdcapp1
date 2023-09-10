export default function doubleLetters(inputString) {
  let doubledString = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    doubledString += char + char; // Double the current character
  }

  return doubledString;
}
