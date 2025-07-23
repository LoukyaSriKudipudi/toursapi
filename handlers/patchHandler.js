const path = require('path');
const fs = require('fs');
const toursFile = path.join(__dirname, '../dev-data/data/tours-simple.json');
const tours = JSON.parse(fs.readFileSync(toursFile));

const patchHandler = (req, res) => {
  const reqID = req.params.id * 1;
  const tourIndex = tours.findIndex((tour) => tour.id === reqID);

  if (tourIndex === -1) {
    res.status(404).json({ status: 'fail' });
  }
  tours[tourIndex] = { ...tours[tourIndex], ...req.body };

  fs.writeFile(toursFile, JSON.stringify(tours, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ status: 'internal server error' });
    }

    res.status(201).json({
      status: 'success',
    });
  });
};

module.exports = patchHandler;
