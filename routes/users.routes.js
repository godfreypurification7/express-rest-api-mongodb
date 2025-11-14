const express = require('express');
const { getAllUsers, getOneUser, deleteUser, updateUser, createUser } = require('../controllers/users.controller');
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);



module.exports = router;