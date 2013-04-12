#!./third-party/rhino

//load("json.js");
load("third-party/env.rhino.1.2.js");
load("tasty-jason.js");

TastyJason.parse("https://api.delicious.com/v1/posts/add?url=http://www.google.com&description=Search Page&extended=What we search&tags=search&dt=1984—09—01T14:21:31Z&replace=no&shared=yes");

/*  1. Create TastyJSON object.
		2. Add method to parse uri and test
	  3. Connect this to add method below

https://api.delicious.com/v1/posts/add? 

Add a post to Delicious.
ARGUMENTS

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

/*
var rss = readFile('bookmarks.json');
json = TAFFY(rss);
var bk = json().select("t"); 
print(JSON.stringify(bk));
*/
