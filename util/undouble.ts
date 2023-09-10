export default function undoDoubleLetters(inputString) {
  let originalString = "";

  for (let i = 0; i < inputString.length; i += 2) {
    originalString += inputString[i]; // Add every other character
  }

  return originalString;
}
