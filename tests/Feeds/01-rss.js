exports.name = "RSS (2.0)";
exports.html = require("fs").readFileSync(__dirname+"/../Documents/RSS_Example.xml").toString();
exports.expected = {
  "title": "Star City",
  "link": "http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp",
  "description": "How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia's &lt;a href=\"http://howe.iki.rssi.ru/GCTC/gctc_e.htm\"&gt;Star City&lt;/a&gt;.",
  "language": "en-us",
  "pubDate": "2003-06-03T09:39:21.000Z",
  "lastBuildDate": "2003-06-10T09:41:01.000Z",
  "docs": "http://blogs.law.harvard.edu/tech/rss",
  "generator": "Weblog Editor 2.0",
  "managingEditor": "editor@example.com",
  "webMaster": "webmaster@example.com",
  "guid": "http://liftoff.msfc.nasa.gov/2003/06/03.html#item573",
  "type": "rss",
  "items": [
    {
      "title": "Star City",
      "link": "http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp",
      "description": "How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia's &lt;a href=\"http://howe.iki.rssi.ru/GCTC/gctc_e.htm\"&gt;Star City&lt;/a&gt;.",
      "pubDate": "2003-06-03T09:39:21.000Z",
      "guid": "http://liftoff.msfc.nasa.gov/2003/06/03.html#item573"
    },
    {
      "description": "Sky watchers in Europe, Asia, and parts of Alaska and Canada will experience a &lt;a href=\"http://science.nasa.gov/headlines/y2003/30may_solareclipse.htm\"&gt;partial eclipse of the Sun&lt;/a&gt; on Saturday, May 31st.",
      "pubDate": "2003-05-30T11:06:42.000Z",
      "guid": "http://liftoff.msfc.nasa.gov/2003/05/30.html#item572"
    },
    {
      "title": "The Engine That Does More",
      "link": "http://liftoff.msfc.nasa.gov/news/2003/news-VASIMR.asp",
      "description": "Before man travels to Mars, NASA hopes to design new engines that will let us fly through the Solar System more quickly.  The proposed VASIMR engine would do that.",
      "pubDate": "2003-05-27T08:37:32.000Z",
      "guid": "http://liftoff.msfc.nasa.gov/2003/05/27.html#item571"
    },
    {
      "title": "Astronauts' Dirty Laundry",
      "link": "http://liftoff.msfc.nasa.gov/news/2003/news-laundry.asp",
      "description": "Compared to earlier spacecraft, the International Space Station has many luxuries, but laundry facilities are not one of them.  Instead, astronauts have other options.",
      "pubDate": "2003-05-20T08:56:02.000Z",
      "guid": "http://liftoff.msfc.nasa.gov/2003/05/20.html#item570"
    }
  ]
};
