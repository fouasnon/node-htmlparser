exports.name = "RDF test";
exports.type = "rss";
exports.options = {
	handler: {},
	parser: {
		xmlMode: true
	}
};

exports.html = '<?xml version="1.0" encoding="UTF-8"?>\n<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://purl.org/rss/1.0/" xmlns:ev="http://purl.org/rss/1.0/modules/event/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:taxo="http://purl.org/rss/1.0/modules/taxonomy/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:syn="http://purl.org/rss/1.0/modules/syndication/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:admin="http://webns.net/mvcb/">\n\t<channel rdf:about="http://sfbay.craigslist.org/ccc/">\n\t\t<title>craigslist | all community in SF bay area</title>\n\t\t<link>http://sfbay.craigslist.org/ccc/</link>\n\t\t<description/>\n\t\t<dc:language>en-us</dc:language>\n\t\t<dc:rights>Copyright 2011 craigslist, inc.</dc:rights>\n\t\t<dc:publisher>webmaster@craigslist.org</dc:publisher>\n\t\t<dc:creator>webmaster@craigslist.org</dc:creator>\n\t\t<dc:source>http://sfbay.craigslist.org/ccc//</dc:source>\n\t\t<dc:title>craigslist | all community in SF bay area</dc:title>\n\t\t<dc:type>Collection</dc:type>\n\t\t<syn:updateBase>2011-11-04T09:39:10-07:00</syn:updateBase>\n\t\t<syn:updateFrequency>4</syn:updateFrequency>\n\t\t<syn:updatePeriod>hourly</syn:updatePeriod>\n\t\t<items>\n\t\t\t<rdf:Seq>\n\t\t\t\t<rdf:li rdf:resource="http://sfbay.craigslist.org/sby/muc/2681301534.html"/>\n\t\t\t</rdf:Seq>\n\t\t</items>\n\t</channel>\n\t<item rdf:about="http://sfbay.craigslist.org/sby/muc/2681301534.html">\n\t\t<title><![CDATA[ Music Equipment Repair and Consignment ]]></title>\n\t\t<link>\nhttp://sfbay.craigslist.org/sby/muc/2681301534.html\n</link>\n\t\t<description><![CDATA[\nSan Jose Rock Shop offers musical instrument repair and consignment! (408) 215-2065<br> <br> We are pleased to announce our NEW LOCATION: 1199 N 5th st. San Jose, ca 95112. Please call ahead, by appointment only.<br> <br> Recently featured by Metro Newspaper in their 2011 Best of the Silicon Valley edition see it online here:<br> <a href="http://www.metroactive.com/best-of-silicon-valley/2011/music-nightlife/editor-picks.html" rel="nofollow">http://www.metroactive.com/best-of-silicon-valley/2011/music-nightlife/editor-picks.html</a><br> <br> Guitar Set up (acoustic and electronic) $40!<!-- END CLTAGS -->\n]]></description>\n\t\t<dc:date>2011-11-04T09:35:17-07:00</dc:date>\n\t\t<dc:language>en-us</dc:language>\n\t\t<dc:rights>Copyright 2011 craigslist, inc.</dc:rights>\n\t\t<dc:source>\nhttp://sfbay.craigslist.org/sby/muc/2681301534.html\n</dc:source>\n\t\t<dc:title><![CDATA[ Music Equipment Repair and Consignment ]]></dc:title>\n\t\t<dc:type>text</dc:type>\n\t\t<dcterms:issued>2011-11-04T09:35:17-07:00</dcterms:issued>\n\t</item>\n\t<item rdf:about="http://sfbay.craigslist.org/eby/rid/2685010755.html">\n\t\t<title><![CDATA[\nRide Offered - Oakland/BART to LA/SFV - TODAY 3PM 11/04 (oakland north / temescal)\n]]></title>\n\t\t<link>\nhttp://sfbay.craigslist.org/eby/rid/2685010755.html\n</link>\n\t\t<description><![CDATA[\nIm offering a lift for up to two people from Oakland (or near any BART station in the East Bay/580/880 Corridor, or San Jose/Morgan Hill, Gilroy) to the San Fernando Valley / Los Angeles area. Specifically, Im leaving from Oakland between 2:30 and 3:00pm (this is flexible, but if I leave too late my girlfriend will kill me), and heading to Woodland Hills via the 580, I-5, 405, and 101.<!-- END CLTAGS -->\n]]></description>\n\t\t<dc:date>2011-11-04T09:34:54-07:00</dc:date>\n\t\t<dc:language>en-us</dc:language>\n\t\t<dc:rights>Copyright 2011 craigslist, inc.</dc:rights>\n\t\t<dc:source>\nhttp://sfbay.craigslist.org/eby/rid/2685010755.html\n</dc:source>\n\t\t<dc:title><![CDATA[\nRide Offered - Oakland/BART to LA/SFV - TODAY 3PM 11/04 (oakland north / temescal)\n]]></dc:title>\n\t\t<dc:type>text</dc:type>\n\t\t<dcterms:issued>2011-11-04T09:34:54-07:00</dcterms:issued>\n\t</item>\n</rdf:RDF>';

exports.expected = {
  "title": "craigslist | all community in SF bay area",
  "link": "http://sfbay.craigslist.org/ccc/",
  "dc:language": "en-us",
  "dc:rights": "Copyright 2011 craigslist, inc.",
  "dc:publisher": "webmaster@craigslist.org",
  "dc:creator": "webmaster@craigslist.org",
  "dc:source": "http://sfbay.craigslist.org/ccc//",
  "dc:title": "craigslist | all community in SF bay area",
  "dc:type": "Collection",
  "syn:updateBase": "2011-11-04T16:39:10.000Z",
  "syn:updateFrequency": "4",
  "syn:updatePeriod": "hourly",
  "type": "rdf:RDF",
  "items": [
    {
      "title": "![CDATA[ Music Equipment Repair and Consignment ]]",
      "link": "\nhttp://sfbay.craigslist.org/sby/muc/2681301534.html\n",
      "description": "![CDATA[\nSan Jose Rock Shop offers musical instrument repair and consignment! (408) 215-2065 We are pleased to announce our NEW LOCATION: 1199 N 5th st. San Jose, ca 95112. Please call ahead, by appointment only. Recently featured by Metro Newspaper in their 2011 Best of the Silicon Valley edition see it online here:http://www.metroactive.com/best-of-silicon-valley/2011/music-nightlife/editor-picks.html Guitar Set up (acoustic and electronic) $40! END CLTAGS \n]]",
      "dc:date": "2011-11-04T16:35:17.000Z",
      "dc:language": "en-us",
      "dc:rights": "Copyright 2011 craigslist, inc.",
      "dc:source": "\nhttp://sfbay.craigslist.org/sby/muc/2681301534.html\n",
      "dc:title": "![CDATA[ Music Equipment Repair and Consignment ]]",
      "dc:type": "text",
      "dcterms:issued": "2011-11-04T16:35:17.000Z"
    },
    {
      "title": "![CDATA[\nRide Offered - Oakland/BART to LA/SFV - TODAY 3PM 11/04 (oakland north / temescal)\n]]",
      "link": "\nhttp://sfbay.craigslist.org/eby/rid/2685010755.html\n",
      "description": "![CDATA[\nIm offering a lift for up to two people from Oakland (or near any BART station in the East Bay/580/880 Corridor, or San Jose/Morgan Hill, Gilroy) to the San Fernando Valley / Los Angeles area. Specifically, Im leaving from Oakland between 2:30 and 3:00pm (this is flexible, but if I leave too late my girlfriend will kill me), and heading to Woodland Hills via the 580, I-5, 405, and 101. END CLTAGS \n]]",
      "dc:date": "2011-11-04T16:34:54.000Z",
      "dc:language": "en-us",
      "dc:rights": "Copyright 2011 craigslist, inc.",
      "dc:source": "\nhttp://sfbay.craigslist.org/eby/rid/2685010755.html\n",
      "dc:title": "![CDATA[\nRide Offered - Oakland/BART to LA/SFV - TODAY 3PM 11/04 (oakland north / temescal)\n]]",
      "dc:type": "text",
      "dcterms:issued": "2011-11-04T16:34:54.000Z"
    }
  ]
};
