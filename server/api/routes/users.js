const { vertifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./vertifyToken");
const User = require("../models/User")
const bcrypt = require("bcrypt");
const router = require("express").Router();

//UPDATE
router.put("/:id",verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            console.log(salt);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            console.log(req.body.password);
          } catch (err) {
            return res.status(500).json(err);
          }
        }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE

  router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("User has been deleted")
    }catch(err){
      res.status(500).json(err)
    }
  })

  //GET

  router.get("/find/:id", async (req, res)=>{
    try{
        const user = await User.findById(req.params.id)
      console.log(user);
      const { password, updateAt, ...others } = user._doc;
      res.status(200).json(others)
    }catch(err){
      res.status(500).json(err)
    }
  })
  //GET ALL USER

  router.get("/",  async (req, res)=>{
    const query = req.query.new
    try{
      const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()
      res.status(200).json(users)
    }catch(err){
      res.status(500).json(err)
    }
  })

// follow a user

router.put("/:id/follow", async (req, res)=>{
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
          const currentUser = await User.findById(req.body.userId);
          console.log(user);
          console.log(currentUser);
          if (!user.followers.includes(req.body.userId)) {
            await user.updateOne({ $push: { followers: req.body.userId } });
            await currentUser.updateOne({ $push: { followings: req.params.id } });
            res.status(200).json("user has been followed");
          } else {
            res.status(403).json("you allready follow this user");
          }
        } catch (err) {
          res.status(500).json(err);
          console.log(err);
        }
      } else {
        res.status(403).json("you cant follow yourself");
      }
})

// unfollow a user
  
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    }
  });
  
module.exports = router;
