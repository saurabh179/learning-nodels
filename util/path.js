const path = require('path');


//creating utility which will return current path of main enty point file (app.js)
module.exports = path.dirname(require.main.filename);