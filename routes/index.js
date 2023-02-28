//divie routes into separate files
const router = require('express').Router();
const thoughtRoute = require('./thoughtRoutes');
const userRoute = require('./userRoutes');

router.use('/api/thoughts', thoughtRoute);
router.use('/api/users', userRoute);

module.exports = router;