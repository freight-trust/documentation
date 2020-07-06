# EBCDIC


| **d** | **h** | **EBCDIC** | **EBCDIC**                   | **ASCII** | **ASCII**                 |
|-------|-------|------------|------------------------------|-----------|---------------------------|
| d     | h     | EBCDIC     | ASCII                        |
| 0     | 0     | NUL        | Null                         | NUL       | Null                      |
| 1     | 1     | SOH        | Start of Header              | STX       | Start of Header           |
| 2     | 2     | STX        | Start of Text                | SOT       | Start of Text             |
| 3     | 3     | ETX        | End of Text                  | ETX       | End of Text               |
| 4     | 4     | PF         | Punch Off                    | EOT       | End of Transmission       |
| 5     | 5     | HT         | Horizontal Tab               | ENQ       | Enquiry                   |
| 6     | 6     | LC         | Lower Case                   | ACK       | Acknowledge               |
| 7     | 7     | DEL        | Delete                       | BEL       | Bell                      |
| 8     | 8     |            |                              | BS        | BackSpace                 |
| 9     | 9     |            |                              | HT        | Horizontal Tabulation     |
| 10    | 0A    | SMM        | Start of Manual Message      | LF        | Line Feed                 |
| 11    | 0B    | VT         | Vertical Tabulation          | VT        | Vertical Tabulation       |
| 12    | 0C    | FF         | Form Feed                    | FF        | Form Feed                 |
| 13    | 0D    | CR         | Carriage Return              | CR        | Carriage Return           |
| 14    | 0E    | SO         | Shift Out                    | SO        | Shift Out                 |
| 15    | 0F    | SI         | Shift In                     | SI        | Shift In                  |
| 16    | 10    | DLE        | Data Link Escape             | DLE       | Data Link Escape          |
| 17    | 11    | DC1        | Device Control 1             | DC1       | Device Control 1 \(XON\)  |
| 18    | 12    | DC2        | Device Control 2             | DC2       | Device Control 2          |
| 19    | 13    | TM         | Tape Mark                    | DC3       | Device Control 3 \(XOFF\) |
| 20    | 14    | RES        | Restore                      | DC4       | Device Control 4          |
| 21    | 15    | NL         | New Line                     | NAK       | Negative acknowledge      |
| 22    | 16    | BS         | Backspace                    | SYN       | Synchronous Idle          |
| 23    | 17    | IL         | Idle                         | ETB       | End of Transmission Block |
| 24    | 18    | CAN        | Cancel                       | CAN       | Cancel                    |
| 25    | 19    | EM         | End of Medium                | EM        | End of Medium             |
| 26    | 1A    | CC         | Cursor Control               | SUB       | Substitute                |
| 27    | 1B    | CU1        | Customer Use 1               | ESC       | Escape                    |
| 28    | 1C    | IFS        | Interchange File Separator   | FS        | File Separator            |
| 29    | 1D    | IGS        | Interchange Group Separator  | GS        | Group Separator           |
| 30    | 1E    | IRS        | Interchange Record Separator | RS        | Record Separator          |
| 31    | 1F    | IUS        | Interchange Unit Separator   | US        | Unit Separator            |
| 32    | 20    | DS         | Digit Select                 | \[Space\] | Space                     |
| 33    | 21    | SOS        | Start of Significance        | \!        | Exclamation mark          |
| 34    | 22    | FS         | Field Separator              | "         | Quotes                    |
| 35    | 23    |            |                              | \#        | Hash                      |
| 36    | 24    | BYP        | Bypass                       | $         | Dollar                    |
| 37    | 25    | LF         | Line Feed                    | %         | Percent                   |
| 38    | 26    | ETB        | End of Transmission Block    | &         | Ampersand                 |
| 39    | 27    | ESC        | Escape                       |           | Apostrophe                |
| 40    | 28    |            |                              | \(        | Open bracket              |
| 41    | 29    |            |                              | \)        | Close bracket             |
| 42    | 2A    | SM         | Set Mode                     | \*        | Asterisk                  |
| 43    | 2B    | CU2        | Customer Use 2               | \_  =\+   | Plus                      |
| 44    | 2C    |            |                              | ,         | Comma                     |
| 45    | 2D    | ENQ        | Enquiry                      | \-        | Dash                      |
| 46    | 2E    | ACK        | Acknowledge                  | \.        | Full stop                 |
| 47    | 2F    | BEL        | Bell                         | /         | Slash                     |
| 48    | 30    |            |                              | 0         | Zero                      |
| 49    | 31    |            |                              | 1         | One                       |
| 50    | 32    | SYN        | Synchronous Idle             | 2         | Two                       |
| 51    | 33    |            |                              | 3         | Three                     |
| 52    | 34    | PN         | Punch On                     | 4         | Four                      |
| 53    | 35    | RS         | Reader Stop                  | 5         | Five                      |
| 54    | 36    | UC         | Upper Case                   | 6         | Six                       |
| 55    | 37    | EOT        | End of Transmission          | 7         | Seven                     |
| 56    | 38    |            |                              | 8         | Eight                     |
| 57    | 39    |            |                              | 9         | Nine                      |
| 58    | 3A    |            |                              | :         | Colon                     |
| 59    | 3B    | CU3        | Customer Use 3               | ;         | Semi\-colon               |
| 60    | 3C    | DC4        | Device Control 4             | <         | Less than                 |
| 61    | 3D    | NAK        | Negative Acknowledge         | \_\.  =   | Equals                    |
| 62    | 3E    |            |                              | >         | Greater than              |
| 63    | 3F    | SUB        | Substitute                   | ?         | Question mark             |
| 64    | 40    | SP         | Space                        | @         | At                        |
| 65    | 41    |            |                              | A         | Uppercase A               |
| 66    | 42    |            |                              | B         | Uppercase B               |
| 67    | 43    |            |                              | C         | Uppercase C               |
| 68    | 44    |            |                              | D         | Uppercase D               |
| 69    | 45    |            |                              | E         | Uppercase E               |
| 70    | 46    |            |                              | F         | Uppercase F               |
| 71    | 47    |            |                              | G         | Uppercase G               |
| 72    | 48    |            |                              | H         | Uppercase H               |
| 73    | 49    |            |                              | I         | Uppercase I               |
| 74    | 4A    | �          | Cent Sign                    | J         | Uppercase J               |
| 75    | 4B    | \.         | Full stop                    | K         | Uppercase K               |
| 76    | 4C    | <          | Less\-than                   | L         | Uppercase L               |
| 77    | 4D    | \(         | Left Parenthesis             | M         | Uppercase M               |
| 78    | 4E    | \_\.  =\+  | Plus                         | N         | Uppercase N               |
| 79    | 4F    |            |                              | O         | Uppercase O               |
| 80    | 50    | &          | Ampersand                    | P         | Uppercase P               |
| 81    | 51    |            |                              | Q         | Uppercase Q               |
| 82    | 52    |            |                              | R         | Uppercase R               |
| 83    | 53    |            |                              | S         | Uppercase S               |
| 84    | 54    |            |                              | T         | Uppercase T               |
| 85    | 55    |            |                              | U         | Uppercase U               |
| 86    | 56    |            |                              | V         | Uppercase V               |
| 87    | 57    |            |                              | W         | Uppercase W               |
| 88    | 58    |            |                              | X         | Uppercase X               |
| 89    | 59    |            |                              | Y         | Uppercase Y               |
| 90    | 5A    | \!         | Exclamation mark             | Z         | Uppercase Z               |
| 91    | 5B    | $          | Dollar                       | \[        | Open square bracket       |
| 92    | 5C    | \*         | Asterisk                     | \\        | Backslash                 |
| 93    | 5D    | \)         | Right Parenthesis            | \]        | Close square bracket      |
| 94    | 5E    | ;          | Semicolon                    | ^         | Caret / hat               |
| 95    | 5F    | ¬          | Logical NOT                  | \_        | Underscore                |
| 96    | 60    | \-         | Dash                         | \`        | Grave accent              |
| 97    | 61    | /          | Slash                        | a         | Lowercase a               |
| 98    | 62    |            |                              | b         | Lowercase b               |
| 99    | 63    |            |                              | c         | Lowercase c               |
| 100   | 64    |            |                              | d         | Lowercase d               |
| 101   | 65    |            |                              | e         | Lowercase e               |
| 102   | 66    |            |                              | f         | Lowercase f               |
| 103   | 67    |            |                              | g         | Lowercase g               |
| 104   | 68    |            |                              | h         | Lowercase h               |
| 105   | 69    |            |                              | i         | Lowercase i               |
| 106   | 6A    | \|         | Logical OR                   | j         | Lowercase j               |
| 107   | 6B    | ,          | Comma                        | k         | Lowercase k               |
| 108   | 6C    | %          | Percent                      | l         | Lowercase l               |
| 109   | 6D    | \_         | Underscore                   | m         | Lowercase m               |
| 110   | 6E    | >          | Greater\-than                | n         | Lowercase n               |
| 111   | 6F    | ?          | Question mark                | o         | Lowercase o               |
| 112   | 70    |            |                              | p         | Lowercase p               |
| 113   | 71    |            |                              | q         | Lowercase q               |
| 114   | 72    |            |                              | r         | Lowercase r               |
| 115   | 73    |            |                              | s         | Lowercase s               |
| 116   | 74    |            |                              | t         | Lowercase t               |
| 117   | 75    |            |                              | u         | Lowercase u               |
| 118   | 76    |            |                              | v         | Lowercase v               |
| 119   | 77    |            |                              | w         | Lowercase w               |
| 120   | 78    |            |                              | x         | Lowercase x               |
| 121   | 79    |            |                              | y         | Lowercase y               |
| 122   | 7A    | :          | Colon                        | z         | Lowercase z               |
| 123   | 7B    | \#         | Number Sign                  | \{        | Open brace                |
| 124   | 7C    | @          | At                           | \|        | Pipe                      |
| 125   | 7D    |            | Apostrophe                   | \}        | Close brace               |
| 126   | 7E    | \_  =      | Equals                       | ~         | Tilde                     |
| 127   | 7F    | "          | Quotation mark               |           | Delete                    |
| 128   | 80    |            |                              |           |                           |
| 129   | 81    | a          | Lowercase a                  |           |                           |
| 130   | 82    | b          | Lowercase b                  |           |                           |
| 131   | 83    | c          | Lowercase c                  |           |                           |
| 132   | 84    | d          | Lowercase d                  |           |                           |
| 133   | 85    | e          | Lowercase e                  |           |                           |
| 134   | 86    | f          | Lowercase f                  |           |                           |
| 135   | 87    | g          | Lowercase g                  |           |                           |
| 136   | 88    | h          | Lowercase h                  |           |                           |
| 137   | 89    | i          | Lowercase i                  |           |                           |
| 138   | 8A    |            |                              |           |                           |
| 139   | 8B    |            |                              |           |                           |
| 140   | 8C    |            |                              |           |                           |
| 141   | 8D    |            |                              |           |                           |
| 142   | 8E    |            |                              |           |                           |
| 143   | 8F    |            |                              |           |                           |
| 144   | 90    |            |                              |           |                           |
| 145   | 91    | j          | Lowercase j                  |           |                           |
| 146   | 92    | k          | Lowercase k                  |           |                           |
| 147   | 93    | l          | Lowercase l                  |           |                           |
| 148   | 94    | m          | Lowercase m                  |           |                           |
| 149   | 95    | n          | Lowercase n                  |           |                           |
| 150   | 96    | o          | Lowercase o                  |           |                           |
| 151   | 97    | p          | Lowercase p                  |           |                           |
| 152   | 98    | q          | Lowercase q                  |           |                           |
| 153   | 99    | r          | Lowercase r                  |           |                           |
| 154   | 9A    |            |                              |           |                           |
| 155   | 9B    |            |                              |           |                           |
| 156   | 9C    |            |                              |           |                           |
| 157   | 9D    |            |                              |           |                           |
| 158   | 9E    |            |                              |           |                           |
| 159   | 9F    |            |                              |           |                           |
| 160   | A0    |            |                              |           |                           |
| 161   | A1    | ~          | Tilde                        |           |                           |
| 162   | A2    | s          | Lowercase s                  |           |                           |
| 163   | A3    | t          | Lowercase t                  |           |                           |
| 164   | A4    | u          | Lowercase u                  |           |                           |
| 165   | A5    | v          | Lowercase v                  |           |                           |
| 166   | A6    | w          | Lowercase w                  |           |                           |
| 167   | A7    | x          | Lowercase x                  |           |                           |
| 168   | A8    | y          | Lowercase y                  |           |                           |
| 169   | A9    | z          | Lowercase z                  |           |                           |
| 170   | AA    |            |                              |           |                           |
| 171   | AB    |            |                              |           |                           |
| 172   | AC    |            |                              |           |                           |
| 173   | AD    |            |                              |           |                           |
| 174   | AE    |            |                              |           |                           |
| 175   | AF    |            |                              |           |                           |
| 176   | B0    |            |                              |           |                           |
| 177   | B1    |            |                              |           |                           |
| 178   | B2    |            |                              |           |                           |
| 179   | B3    |            |                              |           |                           |
| 180   | B4    |            |                              |           |                           |
| 181   | B5    |            |                              |           |                           |
| 182   | B6    |            |                              |           |                           |
| 183   | B7    |            |                              |           |                           |
| 184   | B8    |            |                              |           |                           |
| 185   | B9    | \`         | Grave Accent                 |           |                           |
| 186   | BA    |            |                              |           |                           |
| 187   | BB    |            |                              |           |                           |
| 188   | BC    |            |                              |           |                           |
| 189   | BD    |            |                              |           |                           |
| 190   | BE    |            |                              |           |                           |
| 191   | BF    |            |                              |           |                           |
| 192   | C0    | \{         | Opening Brace                |           |                           |
| 193   | C1    | A          | Uppercase A                  |           |                           |
| 194   | C2    | B          | Uppercase B                  |           |                           |
| 195   | C3    | C          | Uppercase C                  |           |                           |
| 196   | C4    | D          | Uppercase D                  |           |                           |
| 197   | C5    | E          | Uppercase E                  |           |                           |
| 198   | C6    | F          | Uppercase F                  |           |                           |
| 199   | C7    | G          | Uppercase G                  |           |                           |
| 200   | C8    | H          | Uppercase H                  |           |                           |
| 201   | C9    | I          | Uppercase I                  |           |                           |
| 202   | CA    |            |                              |           |                           |
| 203   | CB    |            |                              |           |                           |
| 204   | CC    |            |                              |           |                           |
| 205   | CD    |            |                              |           |                           |
| 206   | CE    |            |                              |           |                           |
| 207   | CF    |            |                              |           |                           |
| 208   | D0    | \}         | Closing Brace                |           |                           |
| 209   | D1    | J          | Uppercase J                  |           |                           |
| 210   | D2    | K          | Uppercase K                  |           |                           |
| 211   | D3    | L          | Uppercase L                  |           |                           |
| 212   | D4    | M          | Uppercase M                  |           |                           |
| 213   | D5    | N          | Uppercase N                  |           |                           |
| 214   | D6    | O          | Uppercase O                  |           |                           |
| 215   | D7    | P          | Uppercase P                  |           |                           |
| 216   | D8    | Q          | Uppercase Q                  |           |                           |
| 217   | D9    | R          | Uppercase R                  |           |                           |
| 218   | DA    |            |                              |           |                           |
| 219   | DB    |            |                              |           |                           |
| 220   | DC    |            |                              |           |                           |
| 221   | DD    |            |                              |           |                           |
| 222   | DE    |            |                              |           |                           |
| 223   | DF    |            |                              |           |                           |
| 224   | E0    | \\         | Backslash                    |           |                           |
| 225   | E1    |            |                              |           |                           |
| 226   | E2    | S          | Uppercase S                  |           |                           |
| 227   | E3    | T          | Uppercase T                  |           |                           |
| 228   | E4    | U          | Uppercase U                  |           |                           |
| 229   | E5    | V          | Uppercase V                  |           |                           |
| 230   | E6    | W          | Uppercase W                  |           |                           |
| 231   | E7    | X          | Uppercase X                  |           |                           |
| 232   | E8    | Y          | Uppercase Y                  |           |                           |
| 233   | E9    | Z          | Uppercase Z                  |           |                           |
| 234   | EA    |            |                              |           |                           |
| 235   | EB    |            |                              |           |                           |
| 236   | EC    |            |                              |           |                           |
| 237   | ED    |            |                              |           |                           |
| 238   | EE    |            |                              |           |                           |
| 239   | EF    |            |                              |           |                           |
| 240   | F0    | 0          | Zero                         |           |                           |
| 241   | F1    | 1          | One                          |           |                           |
| 242   | F2    | 2          | Two                          |           |                           |
| 243   | F3    | 3          | Three                        |           |                           |
| 244   | F4    | 4          | Four                         |           |                           |
| 245   | F5    | 5          | Five                         |           |                           |
| 246   | F6    | 6          | Six                          |           |                           |
| 247   | F7    | 7          | Seven                        |           |                           |
| 248   | F8    | 8          | Eight                        |           |                           |
| 249   | F9    | 9          | Nine                         |           |                           |
| 250   | FA    |            |                              |           |                           |
| 251   | FB    |            |                              |           |                           |
| 252   | FC    |            |                              |           |                           |
| 253   | FD    |            |                              |           |                           |
| 254   | FE    |            |                              |           |                           |
| 255   | FF    |            |                              |           |                           |
