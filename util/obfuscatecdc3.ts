export default function obfuscatecdcAnomString3(inputString, secretKey) {
  let obfuscatedString = "cdc{}";
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    const keyChar = secretKey.charCodeAt(i % secretKey.length);
    const obfuscatedCharCode = charCode ^ keyChar;
    obfuscatedString += String.fromCharCode(obfuscatedCharCode);
  }
  return obfuscatedString;
}
