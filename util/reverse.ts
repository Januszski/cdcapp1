export default function reverseStringRecursive(inputString) {
  if (inputString.length <= 1) {
    return inputString;
  }

  const firstChar = inputString[0];
  const restOfString = inputString.slice(1);

  return reverseStringRecursive(restOfString) + firstChar;
}
