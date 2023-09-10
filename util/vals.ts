import de from "./de";
import double from "./double";
import undouble from "./undouble";
import obf1 from "./obfuscatecdc1";
import obf2 from "./obfuscatecdc2";
import obf3 from "./obfuscatecdc3";
import { XCaesar } from "xcaesar";
import rev from "./reverse";
import sam from "./sameify";

const vals = [
  {
    flag: sam(
      obf2("Y2Rj") +
        atob(sam("Y2Rjew==")) +
        atob(
          rev(
            undouble(
              double(
                rev(
                  de("zzzzssssvvvvkkkk9999qqqqvvvvSSSSHHHHddddrrrr") +
                    sam("hdGl2ZQ==")
                )
              )
            )
          )
        ) +
        atob("fQ==")
    ).substring(4),
    vals: [
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "CCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo"
                    ) + sam("SVNFIENVQkU=")
                  )
                )
              )
            )
          )
      ).substring(4),
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "XXXXzzzzbbbbeeeeqqqqHHHHaaaaeeeePPPPWWWWoooonnnnYYYYrrrr1111mmmmbbbbjjjjrrrroooo"
                    )
                  )
                )
              )
            )
          ) +
          sam(atob("UyBBIEdPT0QgREFZ"))
      ).substring(4),
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "99990000ppppddddXXXXoooommmmCCCCiiiirrrrmmmmttttXXXXYYYYrrrrffffXXXXoooohhhhCCCCqqqqGGGGmmmmrrrrjjjjaaaaeeeebbbbjjjjrrrroooo"
                    ) + sam("EIERBWQ==")
                  )
                )
              )
            )
          )
      ).substring(4),
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "ooooCCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo"
                    ) + sam("VNFQ1VCRQ==")
                  )
                )
              )
            )
          )
      ).substring(4),
    ],
  },
  {
    flag:
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "zzzz3333zzzz3333zzzz3333zzzzHHHHnnnnGGGGxxxx000011110000AAAAFFFFnnnn2222uuuu"
                    ) + sam("3d3d3d3c=")
                  )
                )
              )
            )
          )
      ).substring(4) + atob("fQ=="),
    vals: [
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "9999GGGGnnnnCCCCGGGGHHHHmmmmCCCCqqqq0000qqqqffffXXXXUUUUqqqqXXXXXXXXYYYYnnnniiii99990000mmmm"
                    ) + sam("SRUlHTkVS")
                  )
                )
              )
            )
          )
      ).substring(4),
      sam(
        obf2("Y2Rj") +
          rev(
            undouble(
              double(
                rev(
                  atob(
                    de(
                      "nnnniiii99990000mmmmCCCC0000YYYYeeeeoooorrrrGGGGppppddddHHHHqqqqnnnnoooo9999GGGGnnnn"
                    ) + sam("CBBUyBJU0U")
                  )
                )
              )
            )
          )
      ).substring(4),
    ],
  },
];

export default vals;
