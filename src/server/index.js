const express = require('express')
const routes = require('./api/routes');
const path = require('path');

const PORT = process.env.PORT || 8080;


// Initialize Express app.
const app = express()
app.use(express.static(path.join(process.cwd(), 'src/client')))
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

