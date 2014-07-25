// XPath CheatSheet


// 1. General.


'/html'                     // whole web page (css: html)
'/html/body'                // whole web page body (css: body)
'//text()'                  // all text nodes of web page
'/html/body/.../.../.../E'  // element <E> by absolute reference (css: body > … > … > … > E)


// 2. Tag.


'//E'                                        // element <E> by relative reference (css: E)
'(//E)[2]'                                   // second <E> element anywhere on page
'//img'                                      // image element (css: img)
'//E[@A]'                                    // element <E> with attribute A (css: E[A])
'//E[@A="t"]'                                // element <E> with attribute A containing text 't' exactly (css: E[A='t'])
'//E[contains(@A,"t")]'                      // element <E> with attribute A containing text 't' (css: E[A*='t'])
'//E[starts-with(@A, "t")]'                  // element <E> whose attribute A begins with 't' (css: E[A^='t'])
'//E[ends-with(@A, "t")]'                    // element <E> whose attribute A ends with 't' (css: E[A$='t'])
'//E[contains(concat(" ", @A, " "), " w ")'  // element <E> with attribute A containing word 'w' (css: E[A~='w'])
'//E[matches(@A, "r")]'                      // element <E> with attribute A matching regex ‘r’
'//E1[@id=I1] | //E2[@id=I2]'                // element <E1> with id I1 or element <E2> with id I2 (css: E1#I1, E2#I2)
'//E1[@id=I1 or @id=I2]'                     // Element <E1> with id I1 or id I2 (css: E1#I1, E1#I2)


