const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/v1/tours', tourRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
