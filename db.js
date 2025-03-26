const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'sql101.infinityfree.com', // თქვენი ჰოსტმენი
  user: 'if0_38609644',           // თქვენი MySQL მომხმარებლის სახელი
  password: 'nH57d6IfXK',         // თქვენი MySQL პაროლი
  database: 'if0_38609644_mybase',   // თქვენი მონაცემთა ბაზის სახელი
  port: 3306                      // პორტი
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
