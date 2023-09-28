const fs = require('fs');

function readJSONFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

const filePath = 'question5.json';

const jsonData = readJSONFile(filePath);

if (jsonData) {
  console.log('Name:', jsonData.name);
  console.log('Age:', jsonData.age);
}
