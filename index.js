const fs = require('fs');
const json2xls = require('json2xls');

// Your JSON data
const jsonData = {
  'Column 1': 'Value 1',
  'Column 2': 'Value 2',

}

// Convert JSON to Excel buffer
const xls = json2xls(jsonData);

// Write Excel buffer to a file
fs.writeFileSync('output.xlsx', xls, 'binary');

console.log('Excel file created successfully.');