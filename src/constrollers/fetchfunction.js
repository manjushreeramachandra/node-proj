const fs = require("fs")
const path = require('path')
const file_dir = path.normalize(__dirname+'/..') + '/ui-config/specification/';

// Read file based on the params.
exports.read_dynamic_file = function (req, res) {
    const file_path = file_dir +req.params.module_name + '/' + req.params.screen_name + '.json'
    fs.readFile(file_path, 'UTF-8', (err, data) => {
        if (err) {
            console.log("err : "+err)
            res.send("err : "+err);
        }
        res.send(data)               
    });
  }