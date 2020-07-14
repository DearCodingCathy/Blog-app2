const db = require('../db/connection')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users =
    [
      {
        "username": "Stephen",
        "email": "blank@gmail.com"
      },
      {
        "username": "Catherine",
        "email": "blank@gmail.com"
      },
      {
        "username": "Max",
        "email": "blank@gmail.com"
      },
      {
        "username": "Kaisha",
        "email": "blank@gmail.com"
      }
    ]

  await User.insertMany(users)
  console.log("Created users!")
}
const run = async () => {
  await main()
  db.close()
}

run()