const fs = require('fs');
const csv = require('csv-parser');

const filePath = 'data.csv';

function displayCSVContent(filePath) {
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      console.table(data);
    })
    .on('end', () => {
      console.log('CSV file reading finished.');
    });
}

displayCSVContent(filePath);
