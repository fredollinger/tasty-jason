#!./third-party/rhino

//load("json.js");
load("third-party/env.rhino.1.2.js");
load("third-party/taffy-min.js");

var rss = readFile('bookmarks.json');
//var rss = getFriendList();
//json = JSON.parse(rss);
json = TAFFY(rss);
//var bk = json().last();

var bk = json().select("t"); 
//var bk = json({ a : "follinge" });
//var item1 = products({item:1});
print(JSON.stringify(bk));
