exports.name = "Atom (1.0)";
exports.html = require("fs").readFileSync(__dirname+"/../Documents/Atom_Example.xml").toString();
exports.expected = {
  "title": "Example Feed",
  "subtitle": "A subtitle.",
  "id": "urn:uuid:60a76c80-d399-11d9-b91C-0003939e0af6",
  "updated": "2003-12-13T18:30:02.000Z",
  "author": "John Doejohndoe@example.com",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "type": "feed",
  "items": [
    {
      "title": "Atom-Powered Robots Run Amok",
      "id": "urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a",
      "updated": "2003-12-13T18:30:02Z",
      "summary": "Some text.",
      "link": "http://example.org/2003/12/13/atom03"
    }
  ],
  "link": "http://example.org/feed/"
};
