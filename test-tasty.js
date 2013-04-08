#!./third-party/rhino

//load("json.js");
load("third-party/env.rhino.1.2.js");
load("tasty-jason.js");

var rss = readFile('bookmarks.json');
json = TAFFY(rss);
var bk = json().select("t"); 
print(JSON.stringify(bk));
