const express = require('express');

const app = express();
const port = process.env.PORT || 9696;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
