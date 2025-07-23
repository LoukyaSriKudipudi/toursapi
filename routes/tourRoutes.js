const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const getHandler = require('../handlers/getHandler');
const postHandler = require('../handlers/postHandler');
const findIDHandler = require('../handlers/findHandler');
const patchHandler = require('../handlers/patchHandler');
const deleteHandler = require('../handlers/deleteHandler');

router.route('/').get(getHandler).post(postHandler);

router
  .route('/:id')
  .get(findIDHandler)
  .patch(patchHandler)
  .delete(deleteHandler);

module.exports = router;
