const express = require('express');
const path = require('path');

const server = (port = 3000) => {
  return new Promise((resolve) => {
    const app = express();

    app.use(express.static(path.join(__dirname, 'public-mock')));

    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
      resolve();
    });
  });
};

module.exports = server;
