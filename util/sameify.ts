import double from "./double";
import reverse from "./reverse";
import undouble from "./undouble";
import vals from "./vals";
import obf1 from "./obfuscatecdc1";
import obf2 from "./obfuscatecdc2";
import obf3 from "./obfuscatecdc3";
import { XCaesar } from "xcaesar";

export default function sameify(string) {
  const ceaserCipher = XCaesar({ shift: 52 });

  const s = string;

  const s2 = ceaserCipher.encrypt(s);

  const s3 = double(s2);

  const s4 = reverse(s3);

  const s5 = reverse(s4);

  const s6 = undouble(s5);

  return s6;
}
