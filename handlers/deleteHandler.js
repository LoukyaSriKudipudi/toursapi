const path = require('path');
const fs = require('fs');

const toursFile = path.join(__dirname, '../dev-data/data/tours-simple.json');
const tours = JSON.parse(fs.readFileSync(toursFile));
module.exports = (req, res) => {
  const reqID = Number(req.params.id);
  const tourIndex = tours.findIndex((tour) => tour.id === reqID);

  if (tourIndex === -1) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  const updatedTours = tours.filter((tour) => tour.id !== reqID);

  fs.writeFile(toursFile, JSON.stringify(updatedTours, null, 2), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: 'fail', message: 'Could not delete tour' });
    }

    // 204: No Content — don’t send a body
    res.status(204).json({ status: 'success' });
  });
};
