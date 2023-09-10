import double from "./double";
import reverse from "./reverse";
import undouble from "./undouble";
import vals from "./vals";
import obf1 from "./obfuscatecdc1";
import obf2 from "./obfuscatecdc2";
import obf3 from "./obfuscatecdc3";
import { XCaesar } from "xcaesar";

//it was a good day by ise cube
//SVQgV0FTIEEgR09PRCBEQVkgQlkg       SVNFIENVQkU=
//====qqqqGGGGmmmmrrrrjjjjaaaaeeeebbbbjjjjrrrrooooCCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo

//ISECUBE - IT WAS A GOOD DAY
//SVNFQ1VCRSAtIElUIFdB       UyBBIEdPT0QgREFZ
//XXXXzzzzbbbbeeeeqqqqHHHHaaaaeeeePPPPWWWWoooonnnnYYYYrrrr1111mmmmbbbbjjjjrrrroooo

//ISE CUBE - IT WAS A GOOD DAY
//SVNFIENVQkUgLSBJVCBXQVMgQSBHT09         EIERBWQ==
//99990000ppppddddXXXXoooommmmCCCCiiiirrrrmmmmttttXXXXYYYYrrrrffffXXXXoooohhhhCCCCqqqqGGGGmmmmrrrrjjjjaaaaeeeebbbbjjjjrrrroooo

//it was a good day by isecube
//SVQgV0FTIEEgR09PRCBEQVkgQlkgS      VNFQ1VCRQ==
//ooooCCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo

//cdc{MtnDewwwwwwwwwwwwwwwww}  Y2Rje010bkRld3d3d3d3d3d3d3d     Y2Rje010bkRld3d3d3d        3d3d3d3c=
//
//zzzz3333zzzz3333zzzz3333zzzzHHHHnnnnGGGGxxxx000011110000AAAAFFFFnnnn2222uuuu

//COLD AS ISE BY FOREIGNER
//Q09MRCBBUyBJU0UgQlkgRk9      SRUlHTkVS
//9999GGGGnnnnCCCCGGGGHHHHmmmmCCCCqqqq0000qqqqffffXXXXUUUUqqqqXXXXXXXXYYYYnnnniiii99990000mmmm

//FOREIGNER - COLD AS ISE
//Rk9SRUlHTkVSIC0gQ09MR      CBBUyBJU0U

export default function encrypt() {
  const ceaserCipher = XCaesar({ shift: 22 });

  const s = "Rk9SRUlHTkVSIC0gQ09MR";
  console.log("s", s);

  const s1 = double(s);
  console.log("s1", s1);

  const s2 = reverse(s1);
  console.log("s2", s2);

  const s3 = ceaserCipher.encrypt(s2);
  console.log("s3", s3);

  const stest = ceaserCipher.decrypt(s3);
  console.log("TEST CAESAR", stest);

  const s4 = double(s3);
  console.log("s4", s4);

  return s4;
}
