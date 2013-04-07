#!/usr/bin/rhino

load("third-party/taffy-min.js");

var rss = readFile('bookmarks.xml');
json = TAFFY(rss);

// print(rss);
