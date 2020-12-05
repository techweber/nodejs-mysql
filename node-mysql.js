var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "neo",
  password: "myneopassword",
  database: "catalog"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT id, title, price, qty FROM products ORDER BY id DESC LIMIT 5", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
