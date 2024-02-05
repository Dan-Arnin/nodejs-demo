mysql = require('mysql');
class DatabaseConnection {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'tiger',
            database : 'textbooks'
        });
    }

    retrieve_books(callback) {
        this.connection.query("SELECT * FROM BOOKS", function (err, result) {
            if (err) throw err;
            console.log("Books retrieved from database");
            callback(result);
        });
    }

    retrieve_authors(callback) {
        this.connection.query("SELECT * FROM AUTHORS", function (err, result) {
            if (err) throw err;
            console.log("Authors retrieved from database");
            callback(result);
        });
    }

    retrieve_author_by_id(name, callback) {
        this.connection.query("SELECT * FROM AUTHORS WHERE NAME = ?", name, function (err, result) {
            if (err) throw err;
            console.log("Author by id retrieved from database");
            callback(result);
        });
    }
}

module.exports = DatabaseConnection;
