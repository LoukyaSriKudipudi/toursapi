const path = require('path');
const fs = require('fs');
const toursFile = path.join(__dirname, '../dev-data/data/tours-simple.json');
const tours = JSON.parse(fs.readFileSync(toursFile));

// get
const getHandler = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: { tours },
  });
};

module.exports = getHandler;
