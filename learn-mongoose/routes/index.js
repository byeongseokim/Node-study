const expess = require("express");
const User = require("../schemas/user");

const router = expess.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render("mongoose", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
