const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject Promise and send error to Promise's catch method
            if (err) {
                reject(err);
                // return out of the function so Promise doesn't accidentally execture resolve()
                return;
            }

            // if no error, resolve Promise and send successful data to .then() method
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: 'File Copied'
            });
        });
    });
}

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
  };