// XPath CheatSheet


// 1. General.


'/html'                     // whole web page (css: html)
'/html/body'                // whole web page body (css: body)
'//text()'                  // all text nodes of web page
'/html/body/.../.../.../E'  // element <E> by absolute reference (css: body > … > … > … > E)


// 2. Tag.


'//E'                    // element <E> by relative reference (css: E)
'(//E)[2]'               // second <E> element anywhere on page
'//img'                  // image element (css: img)
'//E[@A]'                // element <E> with attribute A (css: E[A])
'//E[@A="t"]'            // element <E> with attribute A containing text 't' exactly (css: E[A='t'])
'//E[contains(@A,"t")]'  // element <E> with attribute A containing text 't' (css: E[A*='t'])




