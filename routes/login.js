import express from 'express'
import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { secret } from '../utils/constants'

const saltRounds = 10;
const router = express.Router();

router.post('/login', async (req, res) => {
  const body = {
    ...req.body,
  }
  console.error(body)

  try {
    const userDB = await User.findOne({ email: body.email })
    console.log(userDB)
    if (!userDB) {
      return res.status(400).json({
        message: 'Incorrect email or password.'
      })
    }
    console.log(body.password)

    const result = bcrypt.compareSync(body.password, userDB.password)
    if (!result) {
      return res.status(400).json({
        message: 'Incorrect email or password.'
      })
    }

    const token = jwt.sign({
      data: userDB
    }, secret, { expiresIn: 60 * 60 })

    return res.status(200).json({ user: userDB, token })
  } catch (error) {
    return res.status(400).json({
      message: 'An error ocurred on the server.',
      error
    })
  }
})

module.exports = router;