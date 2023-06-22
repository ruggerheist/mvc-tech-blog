const router = require('express').Router();
const { Post } = require('../../models');
// add withAuth

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body
             
        });
        res.status(200).json(newPost); 
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;