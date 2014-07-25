// XPath CheatSheet
// To test XPath in your Chrome Debugger: $x('/html/body')
// http://www.jittuu.com/2012/2/14/Testing-XPath-In-Chrome/


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


// 7. Parent & Child.


'//E/*[1]'                                                        // first child of element <E> (css: E > *:first-child)
'//E[1]'                                                          // first <E> child (css: E:first-of-type)
'//E/*[last()]'                                                   // last child of element E (css: E *:last-child)
'//E[last()]'                                                     // last <E> child (css: E:last-of-type)
'//E[2]'                                                          // second <E> child (css: E:nth-of-type(2))
'//*[2][name()="E"]'                                              // second child that is an <E> element (css: E:nth-child(2))
'//E[last()-1]'                                                   // second-to-last <E> child (css: E:nth-last-of-type(2))
'//*[last()-1][name()="E"]'                                       // second-to-last child that is an <E> element (css: E:nth-last-child(2))
'//E1/[E2 and not( *[not(self::E2)])]'                            // element <E1> with only <E2> children
'//E/..'                                                          // parent of element <E>
'//*[@id="I"]/.../.../.../E'                                      // descendant <E> of element with id I using specific path (css: #I > … > … > … > E)
'//*[@id="I"]//E'                                                 // descendant <E> of element with id I using unspecified path (css: #I E)
'//E[count(*)=0]'                                                 // element <E> with no children (E:empty)
'//E[count(*)=1]'                                                 // element <E> with an only child
'//E[count(preceding-sibling::*)+count(following-sibling::*)=0]'  // element <E> that is an only child (css: E:only-child)
'//E[count(../E) = 1]'                                            // element <E> with no <E> siblings (css: E:only-of-type)
'//E[position() mod N = M + 1]'                                   // every Nth element starting with the (M+1)th (css: E:nth-child(Nn+M))


// 8. Sibling.


'//E2/following-sibling::E1'                 // element <E1> following some sibling <E2> (css: E2 ~ E1)
'//E2/following-sibling::*[1][name()="E1"]'  // element <E1> immediately following sibling <E2> (css: E2 + E1)
'//E2/following-sibling::*[2][name()="E1"]'  // element <E1> following sibling <E2> with one intermediary (css: E2 + * + E1)
'//E/following-sibling::*'                   // sibling element immediately following <E> (css: E + *)
'//E2/preceding-sibling::E1'                 // element <E1> preceding some sibling <E2>
'//E2/preceding-sibling::*[1][name()="E1"]'  // element <E1> immediately preceding sibling <E2>
'//E2/preceding-sibling::*[2][name()="E1"]'  // element <E1> preceding sibling <E2> with one intermediary
'//E/preceding-sibling::*[1]'                // sibling element immediately preceding <E>


// 9. Table Cell.


'//*[@id="TestTable"]//tr[3]//td[2]'          // cell by row and column (e.g. 3rd row, 2nd column) (css: #TestTable tr:nth-child(3) td:nth-child(2))
'//td[preceding-sibling::td="t"]'             // cell immediately following cell containing 't' exactly
'td[preceding-sibling::td[contains(.,"t")]]'  // cell immediately following cell containing 't' (css: td:contains('t') ~ td)


// 10. Dynamic.


'//E[@disabled]'       // user interface element <E> that is disabled (css: E:disabled)
'//*[not(@disabled)]'  // user interface element that is enabled (css: E:enabled)
'//*[@checked]'        // checkbox (or radio button) that is checked (css: *:checked)





