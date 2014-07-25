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
'//E1[@id=I1 or @id=I2]'                     // element <E1> with id I1 or id I2 (css: E1#I1, E1#I2)


// 3. Attribute.


'//E/@A'                    // attribute A of element <E> (css: E@A)
'//*/@A'                    // attribute A of any element (css: *@A)
'//E[@A2="t"]/@A1'          // attribute A1 of element <E> where attribute A2 is 't' exactly (css: E[A2='t']@A1)
'//E[contains(@A,"t")]/@A'  // attribute A of element <E> where A contains 't' (css: E[A*='t']@A)


// 4. ID & Name.


'//*[@id="I"]'                // element with id I (css: #I)
'//E[@id="I"]'                // element <E> with id I (css: E#I)
'//*[@name="N"]'              // element with name (css: [name='N'])
'//E[@name="N"]'              // element <E> with name (css: E[name='N'])
'//*[@id="X" or @name="X"]'   // element with id X or, failing that, a name X
'//*[@name="N"][v+1]'         // element with name N & specified 0-based index ‘v’ (css: [name='N']:nth-child(v+1))
'//*[@name="N"][@value="v"]'  // element with name N & specified value ‘v’ (css: *[name='N'][value='v’])


// 5. Lang & Class.


'//E[@lang="L" or starts-with(@lang, concat("L", "-"))]'  // element <E> is explicitly in language L or subcode (css: E[lang|=L])
'//*[contains(concat(" ", @class, " "), " C ")]'          // element with a class C (css: .C)
'//E[contains(concat(" ", @class, " "), " C ")]'          // element <E> with a class C (css: E.C)


// 6. Text & Link.


'//*[.="t"]'                  // element containing text 't' exactly
'//E[contains(text(), "t")]'  // element <E> containing text 't' (css: E:contains('t'))
'//a'                         // link element (css: a)
'//a[.="t"]'                  // element <a> containing text 't' exactly
'//a[contains(text(), "t")]'  // element <a> containing text 't' (css: a:contains('t'))
'//a[@href="url"]'            // <a> with target link 'url' (css: a[href='url'])
'//a[.="t"]/@href'            // link URL labeled with text 't' exactly
