const getCurrent = async (req, res) => {
    const {email, favorite} = req.user;
    res.json({
    status: "success",
    code: 200,
    data: {
        user: {
            email,
            favorite
        }
    }
    })
  }

module.exports = getCurrent