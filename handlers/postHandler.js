const path = require('path');
const fs = require('fs');
const toursFile = path.join(__dirname, '../dev-data/data/tours-simple.json');
const tours = JSON.parse(fs.readFileSync(toursFile));

const postHandler = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = { id: newID, ...req.body };
  tours.push(newTour);

  fs.writeFile(toursFile, JSON.stringify(tours), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: 'fail', message: 'Could not write file' });
    }

    res.status(201).json({
      status: 'success',
      result: tours.length,
      data: { tour: newTour },
    });
  });

  console.log(req.body);
};

module.exports = postHandler;
