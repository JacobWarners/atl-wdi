'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }

//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

//   let lines = content.split('\n');

//   // clean up the array by removing the empty line
//   lines.pop();

//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });

let readFilePromise = new Promise((resolve, reject) => {
  fs.readFile(inFile, { endcoding: 'utf8' }, function(error, content){
      reject(error);
      resolve(content);
    });
});

readFilePromise
        .then((content) => {
          let lines = content.split('\n');
          lines.pop();
          lines.forEach(function(line) {
              console.log('Hello, ' + line + '!');
          });
        })
        .catch((error) => {
          console.log(error);
        });