load("third-party/taffy-min.js");
load("third-party/parseuri.js");



/* 1. Create new object
	 2. Create function parse uri
*/

// Pass in the path to the rss library to the constructor and have as a propery to f tasty jason.

// Create class TastyJason
/* add funciton addnewbookmark to this class w/ variables:

&url={URL}
(required) the url of the item.

&description={...}
(required) the description of the item.

&extended={...}
(optional) notes for the item.

&tags={...}
(optional) tags for the item (comma delimited).

&dt={CCYY—MM—DDThh:mm:ssZ}
(optional) datestamp of the item (format “CCYY—MM—DDThh:mm:ssZ”).
Requires a LITERAL “T” and “Z” like in ISO8601 at 
http://www.cl.cam.ac.uk/~mgk25/iso—time.html for Example: "1984—09—01T14:21:31Z"

&replace=no
(optional) don’t replace post if given url has already been posted.

&shared=no
(optional) make the item private

*/
