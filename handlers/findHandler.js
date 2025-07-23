const path = require('path');
const fs = require('fs');
const toursFile = path.join(__dirname, '../dev-data/data/tours-simple.json');
const tours = JSON.parse(fs.readFileSync(toursFile));
const findIDHandler = (req, res) => {
  const reqID = req.params.id * 1;
  if (reqID >= tours.length) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: 'Invalid ID',
      },
    });
  }
  const tour = tours.find((el) => el.id === reqID);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

module.exports = findIDHandler;
