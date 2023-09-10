export default function obfuscatecdcAnomString(inputString) {
  let obfuscatedString = "";
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    obfuscatedString += `\\x${charCode.toString(16)}`;
  }
  return obfuscatedString;
}
