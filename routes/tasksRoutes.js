const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add',TaskController.createJogo)
router.post('/add',TaskController.createJogoSave)
router.get('/',TaskController.showJogos)
router.get('/edit/:id', TaskController.updateJogo)
router.post('/edit',TaskController.updateJogoPost)
router.post('/remove',TaskController.removeJogo)
router.post('/done',TaskController.statusJogo)

module.exports = router