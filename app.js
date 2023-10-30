const url = require('url');

function handleRequest(req, res) {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject.purchase_code) {
    const purchaseCode = queryObject.purchase_code;
    res.write("Regular");
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
}

module.exports = {
  handleRequest,
};
