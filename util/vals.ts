import de from "./de";
import d99 from "./double";
import d98 from "./undouble";
import obf1 from "./obfuscatecdc1";
import obf2 from "./obfuscatecdc2";
import obf3 from "./obfuscatecdc3";
import { XCaesar } from "xcaesar";
import r989 from "./reverse";
import sam from "./sameify";

const vals = [
  {
    q: sam(
      obf2("Y2Rj==") +
        atob(sam("Y2Rjew==")) +
        atob(
          r989(
            d98(
              d99(
                r989(
                  de("zzzzssssvvvvkkkk9999qqqqvvvvSSSSHHHHddddrrrr") +
                    r989(sam(r989(sam("hdGl2ZQ=="))))
                )
              )
            )
          )
        ) +
        atob("fQ==")
    ).substring(6),
    r: [
      sam(
        obf2("aQTv==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "CCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo"
                    ) + r989(sam(r989(sam("SVNFIENVQkU"))))
                  )
                )
              )
            )
          )
      ).substring(6),
      sam(
        obf2("qt4A==") +
          r989(
            d98(
              d99(
                r989(
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
      ).substring(6),
      sam(
        obf2("bVty==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "99990000ppppddddXXXXoooommmmCCCCiiiirrrrmmmmttttXXXXYYYYrrrrffffXXXXoooohhhhCCCCqqqqGGGGmmmmrrrrjjjjaaaaeeeebbbbjjjjrrrroooo"
                    ) + r989(sam(r989(sam("EIERBWQ=="))))
                  )
                )
              )
            )
          )
      ).substring(6),
      sam(
        obf2("Q3r1==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "ooooCCCCGGGGHHHHmmmmCCCCGGGGrrrrmmmmaaaaXXXXYYYYnnnnllll99990000nnnnCCCCaaaaaaaaeeeeppppbbbb0000rrrrCCCCmmmmrrrroooo"
                    ) + r989(sam(r989(sam("VNFQ1VCRQ=="))))
                  )
                )
              )
            )
          )
      ).substring(6),
    ],
  },
  {
    q:
      sam(
        obf2("Vo0e==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "zzzz3333zzzz3333zzzz3333zzzzHHHHnnnnGGGGxxxx000011110000AAAAFFFFnnnn2222uuuu"
                    ) + r989(sam(r989(sam("3d3d3d3c"))))
                  )
                )
              )
            )
          )
      ).substring(6) + sam(sam(atob("fQ=="))),
    r: [
      sam(
        obf2("Cx0t==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "9999GGGGnnnnCCCCGGGGHHHHmmmmCCCCqqqq0000qqqqffffXXXXUUUUqqqqXXXXXXXXYYYYnnnniiii99990000mmmm"
                    ) + r989(sam(r989(sam("SRUlHTkVS"))))
                  )
                )
              )
            )
          )
      ).substring(6),
      sam(
        obf2("83Vt==") +
          r989(
            d98(
              d99(
                r989(
                  atob(
                    de(
                      "nnnniiii99990000mmmmCCCC0000YYYYeeeeoooorrrrGGGGppppddddHHHHqqqqnnnnoooo9999GGGGnnnn"
                    ) + r989(sam(r989(sam("CBBUyBJU0U"))))
                  )
                )
              )
            )
          )
      ).substring(6),
    ],
  },
];

export default vals;
