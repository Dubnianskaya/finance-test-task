const {User} = require('../../models')

const updateFavorite = async (req, res) => {
      const {_id} = req.user;
      const {favorite} = req.body;
      const result = await User.findByIdAndUpdate(_id, {favorite}, {new: true});
      res.json({
        status: "success",
        code: 200,
        data: {
         favorite: result.favorite
        }
      })
  }

module.exports = updateFavorite