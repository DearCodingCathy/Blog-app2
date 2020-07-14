const User = require('../models/user')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    res.status(404).json({ message: 'User not found!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUsers,
  getUser

}