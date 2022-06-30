const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, `../front/index.html`));
};

module.exports = homePage;
