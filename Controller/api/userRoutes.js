const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userEmail = await User.findOne({ where: { email: req.body.email } });

        if (!userEmail) {
            res.status(400).json({ message: 'Incorrect email or password' });
            return;                
        }

        const userPassword = await userEmail.checkPassword(req.body.password);

        if (!userPassword) {
            res.status(400).json({ message: 'Incorrect email or password'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userEmail.id;
            req.session.logged_in = true;
            res.json({ user: userEmail, message: 'Logged in' });
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;