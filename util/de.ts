import double from "./double";
import reverse from "./reverse";
import undouble from "./undouble";
import vals from "./vals";
import obf1 from "./obfuscatecdc1";
import obf2 from "./obfuscatecdc2";
import obf3 from "./obfuscatecdc3";
import { XCaesar } from "xcaesar";

// const ceaserCipher = XCaesar({ shift: 22 });

// const originalMessage = "TypeONegative";
// const originalMessage1 = Double(originalMessage);
// console.log("Original Message: " + originalMessage1);

// const encryptedMessage = ceaserCipher.encrypt(originalMessage);
// console.log("Encrypted Message: " + encryptedMessage);

//                                                VHlwZU9OZWd          hdGl         2ZQ==

//====qqqqGGGGmmmmrrrrjjjjaaaaeeeebbbbjjjjrrrrooooCCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo

//zzzzssssvvvvkkkk9999qqqqvvvvSSSSHHHHddddrrrr

//enp6enNzc3N2dnZ2a2trazk5OTlxcXFxdnZ2dlNTU1NISEhIZGRkZHJycnI=

export default function decrypt(string) {
  const s = string;

  const t = obf1(s);

  const t2 = obf2(s);

  const t3 = obf3(s, "fart");

  const s1 = undouble(s);

  const ceaserCipher = XCaesar({ shift: 22 });

  const s2 = ceaserCipher.decrypt(s1);

  const s3 = reverse(s2);

  const s4 = undouble(s3);

  return s4;
}
