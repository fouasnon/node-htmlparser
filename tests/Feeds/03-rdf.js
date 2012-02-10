exports.name = "RDF test";
exports.html = require("fs").readFileSync(__dirname+"/../Documents/RDF_Example.xml").toString();
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

