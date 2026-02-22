const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//   console.log('CREATED THE DIRECTORY');
//   if (err) throw err;
// });

//script to create Folders with your basic web dev files.
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, '');
  fs.writeFileSync(`${folderName}/styles.css`, '');
  fs.writeFileSync(`${folderName}/app.js`, '');
} catch (e) {
  console.log('SOMETHING WENT WRONG');
  console.log(e);
}
