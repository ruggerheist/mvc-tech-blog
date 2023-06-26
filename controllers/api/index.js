const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(err);
});


module.exports = router;