const fs = require('fs');
const glob = require("glob");

const files = glob.sync('files/**', {nodir: true});

const htmlStart = `
<html>
<head>
</head>
<body>
`;

const htmlEnd = `
</body>
</html>
`;

const htmlContent = files.reduce((prevValue, currentValue) => {
  return prevValue.concat(`
    <div>
      <a href="/${currentValue}">${currentValue}</a>
    </div>
  `);
}, '')

const html = htmlStart + htmlContent + htmlEnd;
fs.writeFileSync('index.html', html);