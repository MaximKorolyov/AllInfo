const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('auth', {
        title: 'Авторизация'
    })
})

module.exports = router;