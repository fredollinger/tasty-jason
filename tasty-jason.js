/** TastyJason
 *
 * Server side bookmark storage in JSON and javascript
 * 
 * By: Fred Ollinger
 * 
 * Copyright 2013
 * 
 */

//  BEGIN localStorage
/** Emulate HTML5 localStorage.
 * 
 * http://dev.w3.org/html5/webstorage/#the-storage-interface
 * 
 * Based on:  http://libx.cs.vt.edu/~gback/stuff/localstorage.js
 *
 * https://github.com/thatcher/env-js/commit/ac55e6e3aa985e8fbee126d47f461b06190ecbdf
 * 
 * by Chris Thatcher
 */

localStorage = new Array();

localStorage.byKey = { };

localStorage.key = function (index) {
    return this[index] == undefined ? null : this[index].key;
}

localStorage.getItem = function (key) {
    var rc = this.byKey[key] != undefined ? this.byKey[key].data : null;
    return rc;
}

localStorage.setItem = function (key, data) {
    if (this.byKey[key] == undefined) {
        var entry = { key : key, index: this.length };
        this.push(entry);
        this.byKey[key] = entry;
    }

    this.byKey[key].data = data;
}

localStorage.removeItem = function (key) {
    var entry = this.byKey[key];
    if (entry != undefined) {
        this.splice(entry.index, 1);
        delete this.byKey[key];
    }
}

localStorage.clear = function () {
    this.splice(0, this.length);
    this.byKey = { };
}
// END localStorage

load("third-party/taffy-min.js");
load("third-party/parseuri.js");

function getJsonFromUrl(query) {
  //var query = location.search.substr(1);
  var data = query.split("&");
  var result = {};
  for(var i=0; i<data.length; i++) {
    var item = data[i].split("=");
    result[item[0]] = item[1];
  }
  return result;
}

var TastyJason = {
	add: function(json, username, db) {
      var rss = readFile(db);
      tf = TAFFY(rss);

      var bk = tf().select("t"); 
      print(JSON.stringify(bk));
      // BEGIN insert()
      tf.insert({ 
									"a":username, 
                  "d":json.description,
									"url":json.url, 
                  "n": json.extended,
                  "t": json.tags,
                  "dt": json.dt,
                  "shared": json.shared
      }); // END insert()
  },
	auth: function(raw) {
		uri=parseUri(raw);
    print(uri.user);
    print(uri.password);
  },
  // BEGIN parse()
	parse: function(cmd, db) {
    username="follinge";
		uri=parseUri(cmd);
		json=getJsonFromUrl(uri.query);
		//print(json.description);
    if ("/v1/posts/add" === uri.path){
		  print(uri.path);
      this.add(json, username, db);
    }
    else
      print("UK CMD");
    return "Done";
  } // END parse()

};

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

// Tue Apr 16 10:16:49 PDT 2013
