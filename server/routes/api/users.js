const express = require('express')

const {users: controllers} = require('../../controllers')
const {auth, validation, ctrlWrapper} = require('../../middlewares')
const { joiFavoriteSchema } = require('../../models')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(controllers.getCurrent))
router.patch('/favorite', auth, validation(joiFavoriteSchema), ctrlWrapper(controllers.updateFavorite))

module.exports = router