var DefaultHandler = require("./DefaultHandler.js"),
	DomUtils = require("./DomUtils.js");

//TODO: make this a streamable handler
function FeedHandler(callback){
	this.init(callback, { ignoreWhitespace: true });
}

require("util").inherits(FeedHandler, DefaultHandler);

FeedHandler.prototype.init = DefaultHandler;

function getElements(what, where, one, recurse){
	if(one) return DomUtils.getElementsByTagName(what, where, recurse, 1)[0];
	else	return DomUtils.getElementsByTagName(what, where, recurse);
}

function fetch(what, where, recurse){
	var ret = getElements(what, where, true, recurse);
	if(ret && (ret = ret.children) && ret.length > 0) return ret[0].data;
	else return false;
}

function fetchAll(where, recurse){
    var entry = {};
    if (where) {
        DomUtils.getElementsByTagType("tag", where, recurse, where.length)
            .forEach(function(ret, i){
                         var name = ret.name;
                         if(ret && (ret = ret.children) && ret[0].data && ret.length > 0) 
                             entry[name] = ret[0].data;
                     });
    }
    return entry;
}

function convertDates(feed) {
    var tmp;
    for( var i = 1; i < arguments.length; i++ ) {
        tmp = new Date(feed[arguments[i]]);
        if(isValidDate(tmp))
            feed[arguments[i]] = tmp;
    }
    return feed;
}

function isValidDate(d) {
    // from http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if ( Object.prototype.toString.call(d) !== "[object Date]" )
    return false;
  return !isNaN(d.getTime());
}

var isValidFeed = function(value) {
	return value === "rss" || value === "feed" || value === "rdf:RDF";
}

FeedHandler.prototype.onend = function() {
    var feed = {};
    var feedRoot;
    var tmp, items, childs;

    feedRoot = getElements(isValidFeed, this.dom, true);
    if (feedRoot) {
	if(feedRoot.name === "rdf:RDF"){
	    items = getElements("item", feedRoot.children);
	    childs = getElements("channel", feedRoot.children, true).children;
	}
	else if(feedRoot.name === "rss"){
	    childs = feedRoot.children[0].children;
	    items = getElements("item", childs);
	}
	else {
	    childs = feedRoot.children;
	    items = getElements("entry", childs);
	}
	

        feed = fetchAll(childs);
        feed.type = feedRoot.name;
        feed = convertDates(feed, "lastBuildDate", "modified", "updated", 
                            "dc:date", "syn:updateBase", "sy:updateBase");
	feed.items = Array(items.length);

	if (feedRoot.name === "feed"){

	    if((tmp = getElements("link", childs, true)) && (tmp = tmp.attribs) && (tmp = tmp.href))
		feed.link = tmp;

	    items.forEach(function(item, i){
                var tmp,
                entry = fetchAll(item.children);
                entry = convertDates(entry, "modified", "issued", "pubDate");
		if((tmp = getElements("link", item.children, true)) && (tmp = tmp.attribs) && (tmp = tmp.href))
		    entry.link = tmp;
		feed.items[i] = entry;
	    });
	} else {
	    items.forEach(function(item, i){
                var tmp,
                entry = fetchAll(item.children);
                entry = convertDates(entry, "pubDate", 
                                     "dc:date", "dcterms:issued");
		feed.items[i] = entry;
	    });
	}
        
    }
    this.dom = feed;
    DefaultHandler.prototype._handleCallback.call(this);
};

module.exports = FeedHandler;
