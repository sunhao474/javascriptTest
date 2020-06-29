let parser = new DOMParser(), xmlDom, errors;
let reader = new FileReader();


// xml -> dom
try {
    xmlDom = parser.parseFromString("<root><name>zxb</name><age>17</age></root>", "text/xml");
    console.log(xmlDom);
    errors = xmlDom.getElementsByTagName("parsererror");
    if (errors.length > 0) {
        throw new Error('parsing error');
    }

} catch(err) {
    console.log(err.message);
}

// dom -> xml(str)
let serializer = new XMLSerializer();
let xml = serializer.serializeToString(xmlDom);
console.log(xml);
