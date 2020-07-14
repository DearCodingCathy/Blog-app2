const { Router } = require('express')
const controllers = require('../controllers/users')

const router = Router()

router.get('/users', controllers.getUsers)
router.get('/users/:id', controllers.getUser)

module.exports = router