const fs = require('fs');

const saveToDatabase = (DB)=> {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
        encoding: 'utf8'
    });
}
    

module.exports = {
    saveToDatabase
};

// This utility function saves the current state of the database to a JSON file.
// It uses the 'fs' module to write the database object to 'db.json' in a pretty-printed format.
// The 'utf8' encoding ensures that the file is written correctly as a text file.