#!./rhino

load("env.rhino.1.2.js");
Envjs.scriptTypes['text/javascript'] = true;
load("third-party/jquery-1.8.1.min.js");
load("third-party/jquery.json-2.4.min.js");

function JSON() {
}
JSON.parse = function(rss){ return $.toJSON(rss); };


/**
 * converted stringify() to jQuery plugin.
  * serializes a simple object to a JSON formatted string.
   * Note: stringify() is different from jQuery.serialize() which URLEncodes form elements

    * UPDATES:
     *      Added a fix to skip over Object.prototype members added by the prototype.js library
      * USAGE:
       *  jQuery.ajax({
                *     data : {serialized_object : jQuery.stringify (JSON_Object)},
                 *    success : function (data) {
                          *
                           *    }
                            *   });
        *
         * CREDITS: http://blogs.sitepointstatic.com/examples/tech/json-serialization/json-serialization.js
          */
          jQuery.extend({
                      stringify  : function stringify(obj) {
                                      var t = typeof (obj);
                                              if (t != "object" || obj === null) {
                                                                  // simple data type
                                                                              if (t == "string") obj = '"' + obj + '"';
                                                                                          return String(obj);
                                                                                                  } else {
                                                                                                                      // recurse array or object
                                                                                                                                  var n, v, json = [], arr = (obj && obj.constructor == Array);

                                                                                                                                              for (n in obj) {
                                                                                                                                                                      v = obj[n];
                                                                                                                                                                                      t = typeof(v);
                                                                                                                                                                                                      if (obj.hasOwnProperty(n)) {
                                                                                                                                                                                                                                  if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
                                                                                                                                                                                                                                                      json.push((arr ? "" : '"' + n + '":') + String(v));
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                              return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                          }
          });

JSON.stringify = function(rss){ return jQuery.stringify(rss); };

load("third-party/taffy-min.js");

var rss = readFile('bookmarks.json');
json = TAFFY(rss);
bk = json({ "t" : ["nyc"] });
      //by_city         : friend_db({ city : "Seattle, WA"}),
print (bk.stringify());
/*
for (var myprop in bk){
         print(myprop+": "+bk[myprop]+"/n")
}
*/
//print (JSON.stringify(bk));

