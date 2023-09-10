export default function obfuscatecdcAnomString2(inputString) {
  const substitutions = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "0",
    k: "@",
    l: "#",
    m: "$",
    n: "%",
    o: "^",
    p: "&",
    q: "*",
    r: "(",
    s: ")",
    t: "_",
    u: "+",
    v: "-",
    w: "=",
    x: "{",
    y: "}",
    z: "[",
    A: "!",
    B: "?",
    C: "/",
    D: "\\",
    E: "|",
    F: "<",
    G: ">",
    H: ".",
    I: ",",
    J: ";",
    K: ":",
    L: '"',
    M: "'",
    N: "~",
    O: "`",
    P: " ",
    Q: "\t",
    R: "\n",
    S: "\r",
    T: "\v",
    U: "\f",
    V: "\b",
    W: "\0",
    "cdc{}": "Y2Rje30=",
  };

  let obfuscatedString = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);
    obfuscatedString += substitutions[char] || char;
  }
  return obfuscatedString;
}
