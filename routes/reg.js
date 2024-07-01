const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('reg', {
        title: 'Регистрация'
    })
})

module.exports = router;